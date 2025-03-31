import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; 

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
    const response = await axios.post(`${API_BASE_URL}/auth/create-account`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};