import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export const getResult = async (req, res) => {
  try {
    const { prompt } = req.query;

    const result = await model.generateContent(prompt);

    const responseText = result.response.text();

    res.send(responseText);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
