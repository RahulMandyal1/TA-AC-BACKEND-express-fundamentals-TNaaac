let express = require('express');
let app = express();
let logger  = require('morgan');
let cookieParser = require('cookie-parser');



// using the third party middelwares  Like morgan and cookie parser 
app.use(logger('dev'));
app.use(cookieParser());
app.use((req ,res, next)=>{
    res.cookie("username", "RahulThakur");
    next();
})

app.get('/about' ,(req ,res)=>{
    res.send('send  the cookies to the client');
})
//listening the request on the 6K port
app.listen(9000 ,()=>{
    console.log('Listening the request on the 9K port ');
})