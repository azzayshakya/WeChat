import axios from "axios";

const API_BASE_URL = "http://localhost:3000";


const getAuthToken = () => localStorage.getItem("wechatUserToken");

const authHeaders = () => ({
  headers: { Authorization: `Bearer ${getAuthToken()}` },
});

export const loginApi = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const CreateAccountApi = async (userData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/create-account`,
      userData,
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const logoutApi = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/auth/logout`,
      authHeaders()
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const fetchProjectsApi = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/project/user-projects`,
      authHeaders(),
    );
    console.log(response.data)
    return response.data.projects;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const createProjectApi = async (projectName) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/project/create`,
      { name: projectName },
      authHeaders(),
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getAllUsersApi = async (projectId) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/all-users-except-current`,
      { projectId },
      authHeaders()
    );
    return response.data.users;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const addUserToProjectAPI = async ({ projectId, newUserId }) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/project/add-user`,
      { projectId, newUserId },
      authHeaders(),
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
