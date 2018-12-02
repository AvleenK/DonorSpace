var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

app = express();

const portNo = 3000;

const route = require('./routes/routes');

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