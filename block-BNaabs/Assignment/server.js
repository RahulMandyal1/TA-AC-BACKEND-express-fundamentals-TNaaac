let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use((req ,res ,next)=>{
    next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/' ,(req ,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.get('/new' ,( req ,res)=>{
    res.sendFile(__dirname+'/new.html');
})
app.post('/new' ,(req ,res)=>{
    res.send(req.body);
})
app.get('/users/:username', (req ,res)=>{
    let username  =req.params.username;
    res.send(username);
})
app.listen(5000 , ()=>{
    console.log('Server is Running on the port 5K');
})