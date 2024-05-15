const fs = require("fs")
import { readFile } from 'node:fs';

// reading a file  

const readText = fs.readFileSync("./text/read.txt", "utf-8")
const wrritenText = fs.writeFileSync("./text/write.txt", readText + "this is my writen tage")
console.log(wrritenText);


readFile('/etc/passwd', (err, data) => {
    if (err) throw err;
    console.log(data);
});