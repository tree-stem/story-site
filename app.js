const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/home', (req, res) => {
    console.log("Redirect to home page.");
    res.redirect('/');
});

app.listen(3000, () => {
    console.log("This application is running on port 3000");
});
