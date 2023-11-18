import * as fs from "fs/promises";
import { extractPromptFromZipFile, runModel } from "./utils";

const iexecOut: string | undefined = process.env.IEXEC_OUT || "/tmp/iexec_out";
const iexecIn: string | undefined = process.env.IEXEC_IN || "/tmp/iexec_in";
const dataFileName: string | undefined =
    process.env.IEXEC_DATASET_FILENAME || "protectedData.zip";

(async () => {
    try {
        const prompt = await extractPromptFromZipFile(
            `${iexecIn}/${dataFileName}`
        );

        // idea: model can be an args depending on the intent of the user.
        const text = await runModel(prompt);

        // Append some results
        if (!iexecOut) {
            throw new Error("Environment variable IEXEC_OUT is not set.");
        }

        await fs.writeFile(`${iexecOut}/result.txt`, text);
        console.log(text);
        // Declare everything is computed
        const computedJsonObj = {
            "deterministic-output-path": `${iexecOut}/result.txt`,
        };
        await fs.writeFile(
            `${iexecOut}/computed.json`,
            JSON.stringify(computedJsonObj)
        );
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
