import { processRequest } from '../utils/graphql';

export const getAllGeniesQuerie = (chainId: number): Promise<any> => {
  const query = `
    {
    genies {
        id
        ownerAddress
        ownerTalentLayerId
        price
        schemaCid
        serviceCid
        totalRate
        address
        cid
        averageRate
        numberOfRatings
        proposalCid
        }
    }
    `;
  return processRequest(chainId, query);
};
