let http = require("http");

http
  .createServer((request, response) => {
    response.end(`welcome 2022`);
    console.log(request, response);
  })
  .listen(4000, () => {
    console.log(`server is running on 4000`);
  });
