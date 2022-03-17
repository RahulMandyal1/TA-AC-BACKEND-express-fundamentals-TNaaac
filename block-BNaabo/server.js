let express = require('express');
let app = express();
// middelwares  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname+'/public'));
// handling for  the json Route 
app.post('/json' ,(req ,res)=>{
    console.log(req.body);
})
// handling for the contact route 
app.post('/contact' ,(req ,res)=>{
    res.send(req.body);
})
// Getting a image with the help of a middelware  requested for a image img1
app.get('/images/img1.jpg' , (req ,res)=>{
    res.send();
})
//Getting a image img2 inside public and images directory
app.get('/images/img2.jpg' , (req ,res)=>{
    res.send();
})
//readding the css file as well also getting the css file as well in the response
app.get('/stylesheets/style.css', (req  ,res)=>{
    res.send();
})
// ******** listening the request ********
app.listen(3333 , ()=>{
    console.log('listening  the request on the 3333 port ');
})