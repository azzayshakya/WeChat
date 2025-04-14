import GetInTouch from "../models/GetInToucModel.js";

export const submitGetInTouchForm = async (req, res) => {
  try {
    const { name, email, mobile, location, message } = req.body;

    if (!name || !email || !mobile || !location || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newEntry = await GetInTouch.create({
      name,
      email,
      mobile,
      location,
      message,
    });

    res
      .status(201)
      .json({ message: "Form submitted successfully!", data: newEntry });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
