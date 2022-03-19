let express = require('express');
let app = express();
// middelware is a function that has access to the request and response object  and to the next function 
app.use((req ,res , next)=>{
    console.log( req.url ,req.method);
    next();
})

app.get('/' , (req ,res)=>{
    res.send('This is printed after the middelware function execution');
});

app.listen(4000 , ()=>{
    console.log('server is running on the 4k port');
})