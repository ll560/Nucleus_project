const { response } = require("express");
const express = require("express");
const { request } = require("http");

const app = express();

const PORT = 3000;

const morgan = require('morgan');

app.use(morgan('combined'));
app.set('view engine', 'ejs');


//site pages
app.get("/", (request, response) => {
    response.render("/pages/views/index");
});

app.get('/about', (request, response) => {
    response.render('about');
});

app.get('/login', (request, repsonse) => {
    response.render('login');
});

//admissions
app.get('/admissions/show', (request, response) => {
    response.render('admissions');
});
app.post('/admissions', (request, response) => {
    response.redirect('index');
});

//survey
app.get('/admissions/show', (request, response) => {
    response.render('admissions');
});
app.post('/admissions', (request, response) => {
    response.redirect('/');
});


//admin
app.get('/admin/show', (request, response) => {
    response.render('admin');
});
app.post('/admin', (request, response) => {
    response.redirect('index');
});


app.listen(PORT,() => {
    console.log(`Server is listening on port ${PORT}`);
});