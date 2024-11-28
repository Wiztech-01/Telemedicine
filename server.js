const express = require ('express')
const app = express()
const port = 8280

app.listen(port, () => console.log(`Server has started on port: ${port}`))

// Routing on a web server
// const http = require('http)

// const server = http.createServer((request, response) => {
    // if(request.url === '/){
        // response.writeHead(200, {'Content-Tyepe' : 'text/plain'})
        // response.end('Welcome to the landing page.')
    // } else if(requesr.url === '/about'){
        // response.writeHead(200, {'Content-Tyepe' : 'text/plain'})
        // response.end('Welcome to about us page.')
    //} else {
        // response.writeHead(404, {'Content-Tyepe' : 'text/plain'})
        // response.end('Page not found.')
    //}
    //})

    // response.statusCode = 200;
    // response.setHeader('Content-Type', 'text/plain')
    // response.end('Hello, Web Development Class!');
// })

// conset port = 3000;

// server.listen(PORT, () => {
    // CONSOLE.LOG('Server is running.)
// })