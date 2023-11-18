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
    console.log('openai', openai);

    const thread = await openai.beta.threads.create({
      messages: [
        {
          role: 'user',
          content: 'Give me a summary of the legal situation in Istambul.',
        },
      ],
    });

    console.log('thread', thread);

    // return the thread as a response
    res.status(200).json(thread);
  } catch (error) {
    console.error('Error creating the thread:', error);
    res.status(500).json({ error: 'Error creating the thread' });
  }
}
