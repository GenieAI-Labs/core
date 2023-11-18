import { ArrowSmallRightIcon } from '@heroicons/react/24/outline';
import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
import {useState} from "react";
import {useChainId, useWalletClient} from "wagmi";
import Loading from "../Loading";

function PushChannelSubscriptionToast() {
  const [isLoading, setIsLoading] = useState(false);
  //TODO handle result
  const [result, setResult] = useState<{
    status: any,
    message: string
  }>();

  const PUSH_CHANNEL_ADDRESS = "0x3D0c6A35DcD9AEB46b493cd6CC9Ace84583b7aE8";

  const chainId = useChainId();
  const { data: walletClient } = useWalletClient({
    chainId,
  });

  const subscribeToGenieAiPushChannel = async () => {
    if(walletClient) {
      setIsLoading(true);
      const pushUser = await PushAPI.initialize(walletClient, { env: CONSTANTS.ENV.STAGING });
      const result = await pushUser.notification.subscribe(
          `eip155:11155111:${PUSH_CHANNEL_ADDRESS}`, // channel address in CAIP format
      );
      setResult(result);
      setIsLoading(false);
    }
  }

  return (
    <div className='flex flex-row items-center rounded-2xl p-4'>
      <div className='mt-6 grow sm:mt-0'>
        <div className='pb-4 text-center sm:pb-0 sm:text-left'>
          <p className='font-heading text-md font-semibold leading-normal mb-2 opacity-90'>
            <span className='text-4xl block'>🪄</span>
            <span> Be notified when your genie is done !</span>
          </p>
          <p className='font-alt text-sm font-normal leading-normal max-w-sm opacity-70'>
            <span>
              {' '}
              Your genie can take some time computing your data. Subscribe you our Push channel and be notified when the work is done !
              Go do other stuff, we got you covered :){' '}
            </span>
          </p>
          <div className='mt-3'>
            {!isLoading ? <p
                className='px-5 py-2 rounded-xl bg-redpraha hover:bg-gray-200 text-white hover:text-gray-900 inline-flex items-center text-xs'
                onClick={() => {
                  subscribeToGenieAiPushChannel()
                }}>
              <span>Subscribe now</span>
              <ArrowSmallRightIcon width='16' height='16' className='ml-2'/>
            </p> : Loading()}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PushChannelSubscriptionToast;
