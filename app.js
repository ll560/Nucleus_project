require('dotenv').config();
const express = require('express');

const app = express();
//added bp
const bodyParser = require('body-parser');
const PORT = 3000;
const morgan = require('morgan');
//added fs
const fs = require('fs');
const path = require('path');
const multer = require('multer')
const routes = require('./routes/indexRoutes');
const methodOverride = require('method-override');

//set storge
var storage = multer.diskStorage({
    destination: './public/uploads/', 
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({ storage: storage }).single('upload')




app.set('view engine', 'ejs');

//middlware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(morgan('dev'));


 

 


 



//----------------
app.use(routes);





var imgModel = require('./model/model');

// app.get('/', (req, res) => {
//     imgModel.find({}, (err, items) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send('An error occurred', err);
//         }
//         else {
//             res.render('imagesPage', { items: items });
//         }
//     });
// });


app.post('/resources/show', (request, response) => {
    upload(request, response, (err) => {
        var obj = {
           
            img: {
                data: fs.readFileSync(path.join(__dirname + '/uploads/' + request.file.filename)),
                contentType: 'image/jpeg'
            }
        }
        imgModel.create(obj, (err, item) => {
            if (err) {
                console.log(err);
            }
            else {
                item.save();
                // res.redirect('/');
            }
        });
    })
});







require('./config/connection');
app.listen(PORT,() => {
    console.log(`Server is listening on port ${PORT}`);
});