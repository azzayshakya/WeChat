import Project from "../models/project.model.js";
import User from "../models/user.model.js";

export const createProject = async (req, res) => {
  try {
    const { name } = req.body;
    console.log("1 project name ", name);
    if (!name)
      return res.status(400).json({ message: "Project name is required" });

    const user = await User.findOne({ email: req.user.email });
    if (!user) return res.status(404).json({ message: "User not found" });
    console.log("2 middleware data ", req.user);
    console.log("3 fetched used data id ", user);

    const existingProject = await Project.findOne({ name });
    if (existingProject) {
      return res.status(400).json({ message: "Project name already exists" });
    }

    const project = new Project({
      name,
      users: [user._id],
    });
    await project.save();
    console.log("last step created prject data ", project);

    return res
      .status(201)
      .json({ message: "Project created successfully", project });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
