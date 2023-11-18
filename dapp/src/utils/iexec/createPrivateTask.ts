import {
  IExecConsumer,
  IExecDataProtector,
  ProcessProtectedDataParams,
  getWeb3Provider,
} from '@iexec/dataprotector';
import { IExec } from 'iexec';
import { processProtectedData } from './iexex';

type Result = {
  result: string;
};

type Error = {
  message: string;
};

export const createPrivateTask = async (
  model: string,
  protectedData: string,
): Promise<Result | Error> => {
  let result;
  try {
    const privateKey = process.env.NEXT_IEXEC_APP_PLATFORM_PRIVATE_KEY;
    if (!privateKey) {
      throw new Error('Private key is not set');
    }

    const appAddress = process.env.NEXT_PUBLIC_IEXEC_APP_ADDRESS;
    if (!appAddress) {
      throw new Error('app address is not set');
    }

    const web3Provider = getWeb3Provider(privateKey);
    const dataProtector = new IExecDataProtector(web3Provider);

    console.log({
      dataProtector,
    });

    const mode = 'fork';

    let taskId;
    // @ts-ignore
    if (mode === 'official') {
      const args: ProcessProtectedDataParams = {
        protectedData: protectedData as string,
        app: appAddress,
        maxPrice: 0,
        args: 'Genie',
        secrets: {
          1: model,
        },
      };
      taskId = await dataProtector.processProtectedData(args);
    } else {
      const iexec = new IExec({ ethProvider: web3Provider });

      const args: IExecConsumer & ProcessProtectedDataParams = {
        iexec: iexec,
        protectedData: protectedData as string,
        app: appAddress,
        maxPrice: 0,
        args: 'Genie',
        secrets: {
          1: model,
        },
      };
      taskId = await processProtectedData(args);
    }

    result = taskId;
  } catch (error) {
    console.error(error);
    return { message: error as string };
  }

  return { result: result || 'no result' };
};
