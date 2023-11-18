import * as fs from "fs/promises";
import figlet from "figlet";
import { extractNameFromZipFile } from "./utils";
import { HfInference } from '@huggingface/inference'
import { PythonShell } from 'python-shell';

const iexecOut: string | undefined = process.env.IEXEC_OUT || "/tmp/iexec_out";
const iexecIn: string | undefined = process.env.IEXEC_IN || "/tmp/iexec_in";
const dataFileName: string | undefined =
    process.env.IEXEC_DATASET_FILENAME || "protectedData.zip";


function runPythonScript(scriptPath: string) {
    PythonShell.run(scriptPath)
        .then((result) => {
            console.log(`Python script executed ${scriptPath} successfully.`);
        })
        .catch((err) => {
            console.log('An error occurred while executing the Python script:');
            console.log(err);
        });
}


(async () => {
    runPythonScript("./src/download_model.py");
    runPythonScript("./src/run_model.py");
})();
