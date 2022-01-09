var { readFile, readFileSync } = require(`fs`);

readFile.readFile(`./content.md`, `utf8`, (err, content) => {
  console.log(err, content.toString());
});
var result = readFileSync(`./content.md`, `utf8`);
console.log(result);

let buff1 = Buffer.alloc(10);
buff1.write(`Welcome to Buffer`);
console.log(buff1);
