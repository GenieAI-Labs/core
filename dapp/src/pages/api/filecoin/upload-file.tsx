import type { NextApiRequest, NextApiResponse } from 'next';
import {uploadFile} from "../../../utils/fileCoin";

export default async function handler(req: NextApiRequest, res: NextApiResponse)
{
    const filecoinEmail = process.env.NEXT_PUBLIC_FILECOIN_EMAIL;
    const filecoinSpaceKey = process.env.NEXT_PUBLIC_FILECOIN_SPACE_KEY;

    //check if the file is available
    if (!req.body.file) {
        return res.status(500).json({ error: 'File is missing' });
    }
  // Check if API key is available
    console.log('filecoinEmail',filecoinEmail)
    console.log('filecoinSpaceKey',filecoinSpaceKey)
  if (!filecoinEmail || !filecoinSpaceKey) {
    return res.status(500).json({ error: 'Env variables missing' });
  }

  try {
      console.log('req.body.file',req.body.file)
    const response = await uploadFile(filecoinEmail as `${string}@${string}`, filecoinSpaceKey as `did:${string}:${string}`, req.body.file);
      console.log('response',response)
    res.status(200).json(response.toString());
  } catch (error) {
    console.error('Error uploading the file:', error);
    res.status(500).json({ error: 'Error uploading the file' });
  }
}
