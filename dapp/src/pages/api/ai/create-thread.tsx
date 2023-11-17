import OpenAI from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next';

const openApiKey = process.env.NEXT_PRIVATE_OPENAI_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const firstMessage = req.body;
  // Check if API key is available
  if (!openApiKey) {
    return res.status(500).json({ error: 'API key is missing' });
  }

  try {
    const openai = new OpenAI({ apiKey: openApiKey });

    openai.beta.threads.create({
      messages: [
        {
          role: 'user',
          content:
            'This user has requested help with their resume. Here is their message and resume:',
        },
        {
          role: 'user',
          content: firstMessage.content,
          //   file_ids: [file.id],
        },
      ],
    }),
      // Send the assistant as a response
      res.status(200).json(assistant);
  } catch (error) {
    console.error('Error creating the assistant:', error);
    res.status(500).json({ error: 'Error creating the assistant' });
  }
}
