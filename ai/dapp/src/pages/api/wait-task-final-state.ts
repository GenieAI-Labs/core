import { getWeb3Provider } from '@iexec/dataprotector';
import { IExec } from 'iexec';
import type { NextApiRequest, NextApiResponse } from 'next';

type Result = {
  result: string
}

type Error = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result | Error>
) {
  const privateKey = process.env.NEXT_IEXEC_APP_PLATFORM_PRIVATE_KEY;
  if (!privateKey) {
    throw new Error('Private key is not set');
  }

  const web3Provider = getWeb3Provider(privateKey);
  

  const taskId = req.query.taskId as string;
  const dealId = req.query.dealId as string;

  if (!taskId || !!dealId) {
    throw new Error('missing query args');
  }

  let result;
  try {
    const iexec = new IExec({ ethProvider: web3Provider });
    const taskObservable = await iexec.task.obsTask(taskId);
    const unsubscribe = taskObservable.subscribe({
        next: ({ message }: {message: string}) => console.log(message),
        error: (e) => {
            console.log('error', e)
        },
        complete: async () => {
            console.log('final state reached')
            try{
                const results = await iexec.task.fetchResults(taskId);
                console.log({
                    results,
                })
                result = await results.json();
            } catch(e) {
                console.log('no result', e)
            }
        },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error as string });
  }

  res.status(200).json({ result: result || 'no result' })
}
