let http = require(`http`);
let fs = require(`fs`);
let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === `GET` && req.url === `/file`) {
    res.setHeader(`Content-Type`, `text/html`);
    fs.readFile(`./node.html`, (err, content) => {
      if (err) console.log(err);
      console.log(content);
      res.end(content);
    });
  } else if (req.method === `GET` && req.url === `/stream`) {
    res.setHeader(`Content-Type`, `text/html`);
    fs.createReadStream(`./node.html`).pipe(res);
  }
}
server.listen(5555, () => {
  console.log(`server is loading on port 5555`);
});
