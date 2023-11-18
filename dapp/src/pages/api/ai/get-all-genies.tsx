import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllGeniesQuerie } from '../../../queries/genies';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query;

  const chainId = Number(query.chainId);

  try {
    let response = await getAllGeniesQuerie(chainId);

    const genies = response?.data?.data.genies;

    res.status(200).json({ genies: genies });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
