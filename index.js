/*const sum = (num1, num2) => {
    return num1 + num2;
}

const result = sum(2, 3);

console.log (result);
*/

/*const fs = require('fs');

const generateFile = () => {
    try {
        fs.writeFileSync('data.txt', "Hi, this file was made with Node")
    } catch (err) {
        console.log(err);
    }
}

generateFile();*/

/*const http = require('http');

http.createServer(function (req, res) {
    res.write('server started. hiiii');
    res.end();
}).listen(8080);*/

/*const myModule = require('./my-module');

const date = myModule();

console.log(date);*/

const express = require('express');

// initializing the express app
const app = express();

//specializing the port to lsiten to
const port = 9000;

app.get('/', (req, res) => {
    res.send("Hi from the express server!");
});

app.get('/api/cats', (req, res) => {
    const cats = ["British Shorthair", "Russian Blue"];
    res.send(JSON.stringify(cats));
})



app.listen(port, () => {
    console.log ("Listening on port", port)
});




