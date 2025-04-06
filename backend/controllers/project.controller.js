import mongoose from "mongoose";
import Project from "../models/project.model.js";
import User from "../models/user.model.js";

export const createProject = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name)
      return res.status(400).json({ message: "Project name is required" });

    const user = await User.findOne({ email: req.user.email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const existingProject = await Project.findOne({ name });
    if (existingProject) {
      return res.status(400).json({ message: "Project name already exists" });
    }

    const project = new Project({
      name,
      users: [user._id],
    });
    await project.save();

    return res
      .status(201)
      .json({ message: "Project created successfully", project });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


export const getProjectsByUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const projects = await Project.find({ users: user._id });
    if (!projects || projects.length === 0) {
      return res.status(404).json({ message: "You have not created any project" });
    }

    return res.status(200).json({ message: "Projects fetched successfully", projects });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


export const addUserToProject = async (req, res) => {
  try {
    const { projectId, newUserId } = req.body;

    // Check if the projectId and newUserId are provided
    if (!projectId || !newUserId) {
      return res.status(400).json({ message: "Project ID and New User ID are required" });
    }
    // Verify that the projectId is valid (check if it's a valid ObjectId)
    if (!mongoose.Types.ObjectId.isValid(projectId)) {
      return res.status(400).json({ message: "Invalid Project ID format" });
    }

    // Verify that the newUserId is valid (check if it's a valid ObjectId)
    if (!mongoose.Types.ObjectId.isValid(newUserId)) {
      return res.status(400).json({ message: "Invalid User ID format" });
    }
    // Verify that the project exists
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Check if the user (authenticated user) is already part of the project
    const user = await User.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).json({ message: "Authenticated user not found" });
    }

    if (!project.users.includes(user._id)) {
      return res.status(403).json({ message: "You are not part of this project" });
    }

    // Verify if the new user exists
    const newUser = await User.findById(newUserId);
    if (!newUser) {
      return res.status(404).json({ message: "New user not found" });
    }

    // Check if the user is already part of the project
    if (project.users.includes(newUser._id)) {
      return res.status(400).json({ message: "User is already part of the project" });
    }

    // Add the new user to the project
    project.users.push(newUser._id);
    await project.save();

    return res.status(200).json({ message: "User added to the project successfully", project });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


export const getProjectById = async (req, res) => {
  try {
    const { projectId } = req.params;


    if (!projectId) {
      return res.status(400).json({ message: "Project ID is required" });
    }

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
      return res.status(400).json({ message: "Invalid Project ID format" });
    }

    const project = await Project.findById(projectId).populate("users", "-password");

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    return res.status(200).json({ message: "Project fetched successfully", project });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};