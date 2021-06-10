const { response } = require("express");
const express = require("express");
const { request } = require("http");
const app = express();
const PORT = 3000;
const morgan = require('morgan');
const path = require('path');
require('./config/connection');
const routes = require('./routes/indexRoutes');
const methodOverride = require('method-override');


app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


//middlware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));



app.listen(PORT,() => {
    console.log(`Server is listening on port ${PORT}`);
});