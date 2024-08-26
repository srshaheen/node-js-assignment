const http = require('http');
const fs = require('fs');
const PORT = 5500;


const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This is The home Page');
    }else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This is the About Page');
    }else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This is the Contact Page');
    }else if(req.url === '/file-write'){
        fs.writeFile('demo.txt', 'Hello World', (err) => {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Failed to write file');
            return;
        });

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('File Written Succesfully');
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Route Not Found');
    }
});









server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})