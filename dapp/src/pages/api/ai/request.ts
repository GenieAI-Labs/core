import axios from 'axios';

export const getAllGenies = async (chainId?: number): Promise<any> => {
  try {
    return await axios.get('/api/ai/get-all-genies', {
      params: {
        chainId,
      },
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};
