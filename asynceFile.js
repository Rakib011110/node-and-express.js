const fs = require("fs")

fs.readFile("./text/read.txt", "utf-8", (err, data) => {

    if (err) {
        throw Error("error reading")
    }
    // console.log(data);
    // write code assync await
    fs.writeFile('./text/read2.txt', data, 'utf-8', (err) => {
        if (err) {
            throw Error("error writing")
        }
    });
})
console.log("testing async");
