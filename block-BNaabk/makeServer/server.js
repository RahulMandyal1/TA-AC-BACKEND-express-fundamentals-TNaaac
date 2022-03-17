let express = require('express');
let app = express();
app.get('/index' , (req , res)=>{
    res.send('hey welcome to the express  js');
})

app.listen(3000 ,()=>{
    console.log('server is running on the 3K port');
})

