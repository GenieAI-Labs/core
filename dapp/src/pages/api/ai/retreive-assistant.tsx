import OpenAI from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const openApiKey = process.env.NEXT_PRIVATE_OPENAI_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check if API key is available
  if (!openApiKey) {
    return res.status(500).json({ error: 'API key is missing' });
  }

  try {
    const openai = new OpenAI({ apiKey: openApiKey });

    const assistant = await openai.beta.assistants.retrieve('asst_MzDSgPrndkcyYkScrkaEXbSa');

    // Send the assistant as a response
    return NextResponse.json(assistant, { status: 200 });
  } catch (error) {
    console.error('Error retrieving the assistant:', error);
    return NextResponse.json('Error retrieving the assistant', { status: 500 });
  }
}
