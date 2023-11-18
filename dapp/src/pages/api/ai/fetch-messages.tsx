import OpenAI from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next';

const openApiKey = process.env.NEXT_PRIVATE_OPENAI_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const threadId = req.query.threadId;

  // Check if API key is available
  if (!openApiKey) {
    return res.status(500).json({ error: 'API key is missing' });
  }

  try {
    const openai = new OpenAI({ apiKey: openApiKey });
    const messages = await openai.beta.threads.messages.list(threadId as string);
    res.status(200).json({ threadId, messages: messages.data });
  } catch (error) {
    console.error('Error creating the thread:', error);
    res.status(500).json({ error: 'Error creating the thread' });
  }
}
