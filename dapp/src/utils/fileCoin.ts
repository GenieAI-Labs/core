import { create } from '@web3-storage/w3up-client';
import {importDAG} from "@ucanto/core/delegation";
import {CarReader} from "@ipld/car";

export async function uploadFile(email: `${string}@${string}`, spaceKey: `did:${string}:${string}`, file: File) {
    const client = await create();
    await client.login(email)
    await client.setCurrentSpace(spaceKey);
    return await client.uploadFile(file);
}

/** @param {string} data Base64 encoded CAR file \*/
async function parseProof (data: any) {
    const blocks = []
    const reader = await CarReader.fromBytes(Buffer.from(data, 'base64'))
    for await (const block of reader.blocks()) {
        blocks.push(block)
    }
    return importDAG(blocks)
}