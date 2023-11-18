import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { useAccount, useSwitchNetwork } from 'wagmi';
import { useChainId } from '../hooks/useChainId';
import { getUserByAddress } from '../queries/users';
import { IAccount, IUser } from '../types';
import { toast } from 'react-toastify';
import { chains, defaultChain } from '../pages/_app';
import { TalentLayerClient } from '@genieai/tl-client';

const TalentLayerContext = createContext<{
  user?: IUser;
  account?: IAccount;
  isActiveDelegate: boolean;
  refreshData: () => Promise<boolean>;
  loading: boolean;
  talentLayerClient?: TalentLayerClient;
}>({
  user: undefined,
  account: undefined,
  isActiveDelegate: false,
  refreshData: async () => {
    return false;
  },
  loading: true,
});

const TalentLayerProvider = ({ children }: { children: ReactNode }) => {
  const chainId = useChainId();
  const { switchNetwork } = useSwitchNetwork();
  const [user, setUser] = useState<IUser | undefined>();
  const account = useAccount();
  const [isActiveDelegate, setIsActiveDelegate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [talentLayerClient, setTalentLayerClient] = useState<TalentLayerClient>();

  // automatically switch to the default chain is the current one is not part of the config
  useEffect(() => {
    if (!switchNetwork) return;
    const chain = chains.find(chain => chain.id === chainId);
    if (!chain && defaultChain) {
      switchNetwork(defaultChain.id);
    }
    if (chainId && account.address) {
      const talentLayerClient = new TalentLayerClient({
        chainId,
        ipfsConfig: {
          clientId: process.env.NEXT_PUBLIC_INFURA_ID as string,
          clientSecret: process.env.NEXT_PUBLIC_INFURA_SECRET as string,
          baseUrl: process.env.NEXT_PUBLIC_IPFS_WRITE_URL as string,
        },
        platformId: parseInt(process.env.NEXT_PUBLIC_PLATFORM_ID as string),
        signatureApiUrl: process.env.NEXT_PUBLIC_SIGNATURE_API_URL as string,
      });
      setTalentLayerClient(talentLayerClient);
    }
  }, [chainId, switchNetwork, account.address]);

  const fetchData = async () => {
    if (!account.address || !account.isConnected || !talentLayerClient) {
      setLoading(false);
      return false;
    }

    try {
      const userResponse = await getUserByAddress(chainId, account.address);

      if (userResponse?.data?.data?.users?.length == 0) {
        setLoading(false);
        return false;
      }

      const currentUser = userResponse.data.data.users[0];

      const platform = await talentLayerClient.platform.getOne(
        process.env.NEXT_PUBLIC_PLATFORM_ID as string,
      );
      currentUser.isAdmin = platform?.address === currentUser?.address;

      setUser(currentUser);
      setIsActiveDelegate(
        process.env.NEXT_PUBLIC_ACTIVE_DELEGATE === 'true' &&
          userResponse.data.data.users[0].delegates &&
          userResponse.data.data.users[0].delegates.indexOf(
            (process.env.NEXT_PUBLIC_DELEGATE_ADDRESS as string).toLowerCase(),
          ) !== -1,
      );
      setLoading(false);
      return true;
    } catch (err: any) {
      setLoading(false);
      // eslint-disable-next-line no-console
      console.error(err);
      toast.error(`An error happened while loading you account: ${err.message}.`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return false;
    }
  };

  useEffect(() => {
    fetchData();
  }, [chainId, account.address, talentLayerClient]);

  const value = useMemo(() => {
    return {
      user,
      account: account ? account : undefined,
      isActiveDelegate,
      refreshData: fetchData,
      loading,
      talentLayerClient,
    };
  }, [account.address, user?.id, isActiveDelegate, loading, talentLayerClient]);

  return <TalentLayerContext.Provider value={value}>{children}</TalentLayerContext.Provider>;
};

export { TalentLayerProvider };

export default TalentLayerContext;
