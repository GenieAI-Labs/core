import * as fs from "fs/promises";
import JSZip from "jszip";

export async function extractPromptFromZipFile(zipPath: string) {
    const buffer = await fs.readFile(zipPath);
    const zip = new JSZip();
    await zip.loadAsync(buffer);
    let prompt;
    zip.forEach((relativePath, file) => {
        if (!file.dir && relativePath.includes("prompt")) {
            prompt = file.async("string");
        }
    });
    if (!prompt) {
        throw new Error("No prompt file was found in the zip.");
    }
    return prompt;
}

export async function runModel(prompt: string) {
    return new Promise<string>((resolve, reject) => {
        // Simulate calculation
        // @Dercio put your work here
        setTimeout(() => {
            const text = "This is the generated text.";
            resolve(text);
        }, 1000);
    });
}
