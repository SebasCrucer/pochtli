import { exec } from "child_process";

export const pyFunc = (dotpy: string, params: string[]) => {
    return new Promise((resolve, reject) => {
        exec(`python ${dotpy} ${params.join(' ')}`, { cwd: '../', maxBuffer: 9999999999 }, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error ejecutando el script: ${error}`);
                reject(`Error ejecutando el script: ${error}`);
                return;
            }
            if (stderr) {
                resolve(`Error estándar: ${stderr}`);
                return;
            }
            console.log(`Respuesta de Python: ${stdout}`);
            resolve(stdout);
        });
    })
}