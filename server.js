//Requiring modules 
const http = require('http')
const path = require('path')
const fs = require('fs')

//port
const PORT = 4000;

//routes
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'pages', 'home.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content);
        })
    } else if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'pages', 'about.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content);
        })
    } else if (req.url === '/contact') {
        fs.readFile(path.join(__dirname, 'pages', 'contact.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content);
        })
    } else {
        res.write('<h1>This Page does not exist!<h1>'); 
        res.end();
    }
})

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));