import { Request, Response } from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export const processChat = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const response = await model.generateContent(prompt);
    res.json({ message: response.response.text() });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process chat' });
  }
};
