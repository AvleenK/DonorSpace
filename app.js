const express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
app = express();

const server = express();

const cors = require('cors');

const portNo = 3000;

const route = require('./routes/routes');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

server.use(cors(corsOptions));

const upload = require('./upload');
server.post('/upload', upload);

server.listen(pertNo, () => {
    console.log('Server started!');
});

/*
mongoose.connect('mongodb://localhost:27017/userlist');

mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongoose @ 27017');
});

mongoose.connection.on('error',(err)=>{
    console.log('could not connect:' + err);
});

app.listen(portNo, ()=> {
    console.log('server started at: ' + portNo);
})

app.use('/ds', route);

//middleware cors
//app.use(cors());

//body - parser
app.use(bodyParser.json());

//static files
app.use(express.static(path.join(__dirname, 'src')));

app.use('/api',route)

app.get('/', (req, res)=>{
    res.send('hello');
})
*/