require('dotenv').config();
const express = require("express");

const app = express();
const PORT = 3000;
const morgan = require('morgan');
const path = require('path');

const routes = require('./routes/indexRoutes');
const methodOverride = require('method-override');


app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));



//middlware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.use(routes);
require('./config/connection');
app.listen(PORT,() => {
    console.log(`Server is listening on port ${PORT}`);
});