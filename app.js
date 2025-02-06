const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    console.log("hello, world!");
    res.render('index');
});

app.listen(3000, () => {
    console.log("This application is running on port 3000");
});
