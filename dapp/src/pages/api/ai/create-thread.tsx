import OpenAI from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const openApiKey = process.env.NEXT_PRIVATE_OPENAI_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const firstMessage = req.body;
  // Check if API key is available
  if (!openApiKey) {
    return res.status(500).json({ error: 'API key is missing' });
  }

  try {
    const openai = new OpenAI({ apiKey: openApiKey });

    const thread = openai.beta.threads.create({
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
    });
    // return the thread as a response
    return NextResponse.json(thread, { status: 200 });
  } catch (error) {
    console.error('Error creating the thread:', error);
    return NextResponse.json('Error creating the thread', { status: 500 });
  }
}
