let http = require(`http`);
let url = require(`url`);
let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var parsedUrl = url.parse(req.url);
  var pathname = parsedUrl.pathname;
  console.log(req.method, req.url, parsedUrl.pathname);
  if (req.method === `GET` && req.url === `/`) {
    res.write(`Welcome to Index Page`);
    res.end();
  } else if (req.method === `GET` && pathname === `/about`) {
    res.setHeader(`Content-Type`, `text/html`);
    res.end(`<h2>This is all about NodeJS</h2>`);
  } else if (req.method === `POST` && pathname === `/about`) {
    res.setHeader(`Content-Type`, `text/json`);
    res.end(`This is a post request`);
  } else {
    res.setHeader(`Content-Type`, `text/html`);
    res.end(`Page Not Found`);
  }
}

server.listen(5000, () => {
  console.log(`server is listening on port 5000`);
});
