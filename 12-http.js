const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to home page');
        return;
    }
    if(req.url === '/about'){
        res.end('Here is shared history');
        return;
    }

    res.end(`
        <h1>Oops!</h1>
        <p>W can't seem to find the page you are looking for</p>
        <a href="/">Back to home page</a>`)
})

server.listen(5000);