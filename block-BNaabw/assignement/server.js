// Requiring some  modules in our file 
let express = require('express');
let app = express();
let logger = require('morgan');
let cookieParser = require('cookie-parser');

//for the static path 
app.use(express.static(__dirname+'/public'))
// using some middelwares 
app.use(cookieParser());
//logger to log every request 
app.use(logger('dev'));
//adding cookie in our page 
app.use((req ,res ,next)=>{
    res.cookie('Username','Rahul Thakur');
    next();
})

// Handling  the users Route 
app.get('/users' ,(req ,res)=>{
    res.send('Users page is here ...');
})
// Renderend index.html page on the  / Route
app.get('/',(req ,res)=>{
    res.sendFile(__dirname+'/index.html');
})
// Rendering  the project.html page on  the project Route 
app.get('/project',(req ,res)=>{
    res.sendFile(__dirname+'/project.html');
})

// Error handling   
app.use((req ,res ,next)=>{
    res.send('Page not found');
    next();
})
// listening  the request on  the 8K port 
app.listen(8000 ,()=>{
    console.log('server  is running on the 8K port');
})
