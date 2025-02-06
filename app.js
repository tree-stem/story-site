const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    console.log("hello, world!");
    res.send("<h1>Hello, world!</h1>");
});

app.listen(3000, () => {
    console.log("This application is running on port 3000");
});
