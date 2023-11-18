import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllGenies } from '../../../queries/genies';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query;

  const chainId = Number(query.chainId);

  try {
    let response = await getAllGenies(chainId);

    const genies = response?.data?.data?.services;

    res.status(200).json({ genies: genies });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
