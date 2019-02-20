const http = require('http');


const server = http.createServer(function (req, res) {
    const url = req.url;
    const method = req.method;

    console.log('Server Stared on port 3000');

    //1). Create page with a button to submit a text with POST method
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<p>Hello and welcome to / Web page!</p>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">Create User</button></form></body>');
        res.write('<p>BUTTON!</p>');
        return res.end();
    }

    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>');
        return res.end();
    }

    if (url === '/create-user') {
        res.setHeader('Content-Type', 'text/html');
        const body = [];
        req.on('data', (chunk) => {
            console.log("chunk" + chunk);
            body.push(chunk);
            console.log(" /create-user User name is: " + body);

        });

    }

//2).
    if (url === '/create-user' && method === 'POST') {
        res.write('<p>List of Users</p>');
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
            console.log("User name is: " + body);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log("User name: " + message);
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<style>body{ background-color: darkgrey}</style>');
    res.write('<style>h1{color: green; }</style>');
    res.write('<style>p{color: white;}</style>');
    res.write('<h1>Welcome to my page.</h1>');
    res.write('<p>Hello World!</p>');
    res.end();
});


server.listen(3000);
