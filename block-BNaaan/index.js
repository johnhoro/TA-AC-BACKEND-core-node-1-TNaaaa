let http = require(`http`);

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.headers);
  console.log(req.method, req.url);
  res.end(`welcome to my local server`);
}
server.listen(3000, () => {
  console.log(`Listening on localhost 3000`);
});
