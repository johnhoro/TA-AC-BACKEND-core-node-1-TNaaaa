let http = require(`http`);

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  //   res.statusCode = 201;
  //   res.setHeader(`Content-Type`, `text/html`);
  res.writeHead(201, (`Content-Type`, `text/html`));
  res.write(`hello`);
  res.write(`world`);
  res.end(`welcome jony`);
}

server.listen(4444, () => {
  console.log(`server is listening on 4444`);
});
