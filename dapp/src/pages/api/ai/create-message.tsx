import OpenAI from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  analyze_contract_mistake,
  analyze_financial_statement,
  analyze_medical_symptom,
} from '../../../utils/openAI/functions';

const openApiKey = process.env.NEXT_PRIVATE_OPENAI_API_KEY;

export const sleep = (seconds: number) =>
  new Promise<void>(resolve => {
    setTimeout(() => resolve(), seconds * 1000);
  });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // json decode the request body

  let { content, threadId, assistantId } = JSON.parse(req.body);

  // Check if API key is available
  if (!openApiKey) {
    return res.status(500).json({ error: 'API key is missing' });
  }

  console.log({ content, threadId, assistantId });

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
    } else {
      const threadMessages = await openai.beta.threads.messages.create(threadId, {
        role: 'user',
        content: content,
      });
    }

    let run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: assistantId,
    });

    console.log('run created', { run });

    while (run.status === 'queued' || run.status === 'in_progress') {
      await sleep(0.5);
      run = await openai.beta.threads.runs.retrieve(threadId, run.id);
      console.log(run.started_at, run.status);
    }
    console.log('run finished:', run.status, JSON.stringify(run, null, 2));

    if (run.status === 'requires_action' && run.required_action) {
      console.log('required action:', run.required_action);
      const functionToCall = run.required_action.submit_tool_outputs.tool_calls[0].function.name;
      const arugments = JSON.parse(
        run.required_action.submit_tool_outputs.tool_calls[0].function.arguments,
      );

      let result;
      if (functionToCall === 'analyze_contract_mistake') {
        result = await analyze_contract_mistake(
          arugments.dataProtected as string,
          arugments.country as string,
        );
      } else if (functionToCall === 'analyze_financial_statement') {
        result = await analyze_financial_statement(
          arugments.dataProtected as string,
          arugments.country as string,
        );
      } else if (functionToCall === 'analyze_medical_symptom') {
        result = await analyze_medical_symptom(
          arugments.dataProtected as string,
          arugments.age as string,
        );
      }

      if (result) {
        openai.beta.threads.runs.submitToolOutputs(threadId, run.id, {
          tool_outputs: [
            {
              tool_call_id: run.required_action.submit_tool_outputs.tool_calls[0].id,
              output: result,
            },
          ],
        });
      }
    }

    await sleep(3);
    const messages = await openai.beta.threads.messages.list(threadId);
    console.log(JSON.stringify(messages.data, null, 2));

    res.status(200).json({ threadId, messages: messages.data });
  } catch (error) {
    console.error('Error creating the thread:', error);
    res.status(500).json({ error: 'Error creating the thread' });
  }
}
