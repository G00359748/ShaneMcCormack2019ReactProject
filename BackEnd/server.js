const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://shanomac9716:daisyno7@cluster0-yf3b0.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB,{useNewUrlParser:true});


app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name:String,
    actor:String,
    image:String
})

const CharacterModel = mongoose.model('character', characterSchema);


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/whatever', (req, res) => {
    res.send('whatever')
})

app.get('/name', (req, res) => {
    console.log(req.query.lastname)
    res.send('Welcome ' + req.query.firstname +
        ' ' + req.query.lastname);
})

app.post('/name', (req, res) => {
    console.log(req.body.lastname);
    res.send('post recieved from '
        + req.body.firstname + ' ' +
        req.body.lastname)
})

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/api/characters', (req, res) => {

    CharacterModel.find((error, data) =>{
        res.json({characters:data});
    })
})

app.get('/api/characters/:id', (req, res)=>{
    console.log(req.params.id);

    CharacterModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    })
})

app.delete('/api/characters/:id', (req, res)=>{
    console.log(req.params.id);

    CharacterModel.deleteOne({_id: req.params.id},
        (error, data) =>{
            res.json(data);
        })
})

app.put('/api/characters/:id',(req,res)=>{
    console.log("Edit: "+req.params.id);
    console.log(req.body);
    
    CharacterModel.findByIdAndUpdate(req.params.id,
        req.body,
        {new:true},
        (error,data)=>{
            res.json(data);
        })
})

app.get('/api/characters/:id', (req,res)=>{
    console.log("GET: "+req.params.id);

    CharacterModel.findById(req.params.id,(error, data)=>{
        res.json(data);
    })
})

app.post('/api/characters', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body);
    console.log(req.body.actor);
    console.log(req.body.image);

    CharacterModel.create({
        name:req.body.name, 
        actor:req.body.actor, 
        image:req.body.image
    });

    res.json('post recieved!');
})
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))