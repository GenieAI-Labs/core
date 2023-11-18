import OpenAI from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next';

const openApiKey = process.env.NEXT_PRIVATE_OPENAI_API_KEY;

export const sleep = (seconds: number) =>
  new Promise<void>(resolve => {
    setTimeout(() => resolve(), seconds * 1000);
  });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // json decode the request body

  let { content, threadId } = JSON.parse(req.body);

  // Check if API key is available
  if (!openApiKey) {
    return res.status(500).json({ error: 'API key is missing' });
  }

  console.log({ content, threadId });

  try {
    const openai = new OpenAI({ apiKey: openApiKey });

    if (!threadId) {
      console.log('creating thread');
      const thread = await openai.beta.threads.create({
        messages: [
          {
            role: 'user',
            content: content,
          },
        ],
      });

      console.log('thread created', { thread });

      threadId = thread.id;
    }

    const threadMessages = await openai.beta.threads.messages.create(threadId, {
      role: 'user',
      content: content,
    });

    let run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: 'asst_MzDSgPrndkcyYkScrkaEXbSa',
      model: 'gpt-4-1106-preview',
      instructions: 'additional instructions',
      tools: [{ type: 'code_interpreter' }, { type: 'retrieval' }],
    });

    while (run.status === 'queued' || run.status === 'in_progress') {
      await sleep(0.5);
      run = await openai.beta.threads.runs.retrieve(threadId, run.id);
      console.log(run.started_at, run.status);
    }
    console.log('run finished:', run.status, JSON.stringify(run, null, 2));

    const messages = await openai.beta.threads.messages.list(threadId);
    console.log(JSON.stringify(messages.data, null, 2));

    res.status(200).json({ threadId, messages: messages.data });
  } catch (error) {
    console.error('Error creating the thread:', error);
    res.status(500).json({ error: 'Error creating the thread' });
  }
}
