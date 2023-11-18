import { processRequest } from '../utils/graphql';

export const getAllGenies = (chainId: number): Promise<any> => {
  const query = `
    {
    genies {
        id
        }
    }
    `;
  return processRequest(chainId, query);
};
