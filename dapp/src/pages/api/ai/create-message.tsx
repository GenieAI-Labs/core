import OpenAI from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next';

const openApiKey = process.env.NEXT_PRIVATE_OPENAI_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // json decode the request body

  const { content, threadId } = JSON.parse(req.body);

  // Check if API key is available
  if (!openApiKey) {
    return res.status(500).json({ error: 'API key is missing' });
  }

  try {
    const openai = new OpenAI({ apiKey: openApiKey });

    if (!threadId) {
      const thread = await openai.beta.threads.create({
        messages: [
          {
            role: 'user',
            content: content,
          },
        ],
      });
      const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: 'asst_MzDSgPrndkcyYkScrkaEXbSa',
        model: 'gpt-4-1106-preview',
        instructions: 'additional instructions',
        tools: [{ type: 'code_interpreter' }, { type: 'retrieval' }],
      });

      res.status(200).json(thread);
    }

    const threadMessages = await openai.beta.threads.messages.create(threadId, {
      role: 'user',
      content: content,
    });

    // return the thread as a response
    res.status(200).json(threadMessages);
  } catch (error) {
    console.error('Error creating the thread:', error);
    res.status(500).json({ error: 'Error creating the thread' });
  }
}