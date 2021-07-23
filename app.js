require('dotenv').config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser')
const path = require('path');
const crypto = require('crypto');
const multer =require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const routes = require('./routes/indexRoutes');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const { request, response } = require('express');
const { resolve } = require('path');

app.set('view engine', 'ejs');

//middlware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(morgan('dev'));

///////////////

// app.use(multer ({dest:'./uploads/'}).any());

// app.post('/photo', function(request, response) {
//     const newResource = new Resource();
//     newResource.image.data = fs.readFileSync(request.files.userPhoto.path)
//     newResource.image.contentType = 'image/png';
//     console.log(request.files);
//     newResource.save();
// });

//connection
const conn = mongoose.createConnection(process.env.DB_URL) ;

//init gfs
let gfs;
conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
})

//create storgae engine
const storage = new GridFsStorage({
    url: process.env.DB_URL,
    file: (request, file) => {
        return new Promise((resolve, reject) =>{
            crypto.randomBytes(16, (err, buf) =>{
                if (err){
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});
const upload = multer({storage});


//@route GET/
app.get('/', (request, response) => {
    gfs.files.find().toArray((err, files) => {
        //check if files 
        if (!files || files.length === 0) {
            response.render('createNewResource', {files: false});
        } else {
            files.map(file => {
                if (file.contentType ==='image/jpeg' || file.contentType === 'image/png') {
                    file.isImage = true;
                } else{
                    file.isImage = false;
                }
            });
            response.render('pages/practice', {files: files});
        }
        
    });
   
});

//////browser
app.get('/practice/show',(request, response) => {
    gfs.files.find().toArray((err, files) => {
        //check if files 
        if (!files || files.length === 0) {
            response.render('createNewResource', {files: false});
        } else {
            files.map(file => {
                if (file.contentType ==='image/jpeg' || file.contentType === 'image/png') {
                    file.isImage = true;
                } else{
                    file.isImage = false;
                }
            });
            response.render('pages/practiceBrowser', {files: files});
        }
        
    });
   
});


app.get('practice/image/:filename', (request, response) => {
    gfs.files.findOne({filename: request.params.filename}, (err, file) => {
    //check if file
        if (!file || file.length === 0) {
        return response.status(404).json ({
        err: 'No files exsist'
    });
    } 
    //if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'img/png') {
        // read output to browser
        const readstream = gfs.createReadStream(file.filename);
        readstream.pipe(response);
    } else {
        response.status(404).json ({
            err: 'Not an image'
        })
    }


    })} );



//route POST
app.post('/upload', upload.single('file'), (request, response) => {
    // response.json({file: request.file});
    response.redirect('/' )
});


//@route GET /files
//@desc Display all files in JSON
app.get('/files', (request, response) => {
    gfs.files.find().toArray((err, files) => {
        //check if files 
        if (!files || files.length === 0) {
            return response.status(404).json ({
                err: 'No files exsist'
            });
        } 
        //files exist
        return response.json(files);
    });
});




//@route GET files/:filename
//@desc Display single file 
app.get('/files/:filename', (request, response) => {
    gfs.files.findOne({filename: request.params.filename}, (err, file) => {
    //check if file
        if (!file || file.length === 0) {
        return response.status(404).json ({
        err: 'No files exsist'
    });
} 
    //file exists
    return response.json(file);


    })} );

//@route GET image/:filename
//@desc Display image
app.get('/image/:filename', (request, response) => {
    gfs.files.findOne({filename: request.params.filename}, (err, file) => {
    //check if file
        if (!file || file.length === 0) {
        return response.status(404).json ({
        err: 'No files exsist'
    });
    } 
    //if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'img/png') {
        // read output to browser
        const readstream = gfs.createReadStream(file.filename);
        readstream.pipe(response);
    } else {
        response.status(404).json ({
            err: 'Not an image'
        })
    }


    })} );

    //route DELETE/files/:id
    app.delete('/files/:id', (request, response) => {
        gfs.remove({_id: request.params.id, root: 'uploads'}, (err, gridStore) => {
            if (err) {
                return response.status(404).json({err: err});
            }
            response.redirect('/');
        });
    })





app.use(routes);

require('./config/connection');
app.listen(PORT,() => {
    console.log(`Server is listening on port ${PORT}`);
});