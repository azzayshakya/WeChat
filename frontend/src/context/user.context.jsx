import PropTypes from "prop-types"; // Import PropTypes

import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  // Load user from local storage when app starts
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("wechatUser")) || null;
  });

  // Add useEffect here to check token validity
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("wechatUser"));
    const token = localStorage.getItem("wechatUserToken");
    if (!token || !storedUser) {
      setUser(null);
      localStorage.removeItem("wechatUser"); // Clear storage if no valid session
    }
  }, []);

  // Function to update user and save to local storage
  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem("wechatUser", JSON.stringify(userData)); // Persist user
  };

  return (
    <UserContext.Provider value={{ user, setUser: updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Add PropTypes validation
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
