import { create } from '@web3-storage/w3up-client';

export async function uploadFile(file: File) {
    const client = await create();
    await client.login('hutgin@protonmail.com')
    await client.setCurrentSpace(`did:${'key'}:${'z6MkhxZbJRoNogq8YtfC82FxWFR3Y9mspYhJn33CfyfsGydV'}`);
    return await client.uploadFile(file);
}