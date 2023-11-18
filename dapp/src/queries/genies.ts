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

export const getGenieById = (chainId: number, genieId: string): Promise<any> => {
  const query = `
    {
    genie(id: "${genieId}") {
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
