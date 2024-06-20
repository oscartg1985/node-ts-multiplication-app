import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';
console.log(yarg);

const {b:base , l:limit , s:showTable} = yarg;
 


let outputMessage: string = '';
//const base = 5;
const headerMessage: string= `
    ====================
       Tabla del ${base}
    ====================

`;
for(let i:number=1; i<=limit; i++ ){
    outputMessage += `${base} x ${i} = ${base*i} \n`;
}
outputMessage = headerMessage + outputMessage;

if(showTable)console.log(outputMessage);

const outputPath: string  = `outputs`;

fs.mkdirSync(outputPath , {recursive:true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);

console.log('file created');

