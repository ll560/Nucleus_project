require('dotenv').config();
const express = require("express");

const app = express();
const PORT = 3000;
const morgan = require('morgan');
const path = require('path');

const routes = require('./routes/indexRoutes');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');

//middlware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(morgan('dev'));

app.use(routes);

require('./config/connection');
app.listen(PORT,() => {
    console.log(`Server is listening on port ${PORT}`);
});