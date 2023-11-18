import OpenAI from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next';

const openApiKey = process.env.NEXT_PRIVATE_OPENAI_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { threadId, assistant_id } = req.body;

  if (!openApiKey) {
    return res.status(500).json({ error: 'API key is missing' });
  }

  try {
    const openai = new OpenAI({ apiKey: openApiKey });
    console.log('openai', openai);

    const run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: assistant_id,
      model: 'gpt-4-1106-preview',
      instructions: 'additional instructions',
      tools: [{ type: 'code_interpreter' }, { type: 'retrieval' }],
    });

    console.log('thread', run);

    // return the thread as a response
    res.status(200).json(run);
  } catch (error) {
    console.error('Error creating the thread:', error);
    res.status(500).json({ error: 'Error creating the thread' });
  }
}
