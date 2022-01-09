console.log(`Welcome to Node.js`);

let os = require(`os`);
let cpus = os.cpus().length;
let freeM = os.freemem();
console.log(cpus, freeM);

let buff1 = Buffer.alloc(12);
buff1.write(`Welcome to buffer`);
console.log(buff1.toString());

let buff2 = Buffer.allocUnsafe(12);
buff2.write(`john buffer`);
console.log(buff2.toString());

// blocking and non-blocking code.
// blocking
console.log(`hello world`);
setTimeout(() => {
  console.log(`setTimeout`);
}, 0);
console.log(`welcome to node.js`);

// non blocking Code
console.log(`first`);
console.log(`setTimeout-second`);
console.log(`welcome to node.js third`);
