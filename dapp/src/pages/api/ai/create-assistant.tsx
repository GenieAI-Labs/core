import OpenAI from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next';

const openApiKey = process.env.NEXT_PRIVATE_OPENAI_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check if API key is available
  if (!openApiKey) {
    return res.status(500).json({ error: 'API key is missing' });
  }

  try {
    const openai = new OpenAI({ apiKey: openApiKey });

    const assistant = await openai.beta.assistants.create({
      name: 'Legal',
      description: 'A legal assistant that can answer questions about legal matters.',
      tools: [{ type: 'code_interpreter' }],
      model: 'gpt-4-1106-preview',
      instructions: 'This is a legal assistant that can answer questions about legal matters.',
    });

    // Send the assistant as a response
    res.status(200).json(assistant);
  } catch (error) {
    console.error('Error creating the assistant:', error);
    res.status(500).json({ error: 'Error creating the assistant' });
  }
}
