const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

//1). Create page with a button to submit a text with POST method
    if (url === '/') {
        res.write('<style>body{ background-color: darkgrey}</style>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('<p>BUTTON!</p>');
        return res.end();
    }

//2).
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });

        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<style>body{ background-color: darkgrey}</style>');
    res.write('<style>h1{color: green; }</style>');
    res.write('<style>p{color: white;}</style>');
    res.write('<h1>Welcome to my page.</h1>');
    res.write('<p>Hello World!</p>');
    res.end();
};

module.exports = requestHandler;

