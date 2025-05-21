import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const response = await model.generateContentStream(prompt);
    return new NextResponse(response.body, {
      headers: { 'Content-Type': 'text/event-stream' },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process chat' }, { status: 500 });
  }
}
