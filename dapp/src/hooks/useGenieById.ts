import { useState, useEffect } from 'react';
import { getUserById } from '../queries/users';
import {IGenie, IUser} from '../types';
import { useChainId } from './useChainId';
import {getGenieById} from "../queries/genies";

const useGenieById = (id: string): IGenie | null => {
  const chainId = useChainId();
  const [genie, setGenie] = useState<IGenie | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getGenieById(chainId, id);
        if (response?.data?.data?.genie) {
          setGenie(response.data.data.genie);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  return genie;
};

export default useGenieById;
