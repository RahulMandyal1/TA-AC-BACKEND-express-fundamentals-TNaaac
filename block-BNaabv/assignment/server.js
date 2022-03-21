let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let logger = require("morgan");
let cookieParser = require("cookie-parser");
//adding middelwares for parsing the data in into the json format
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// logger to keep track of our every request and response
app.use(logger("dev"));
// adding the cookie
app.use(cookieParser());
// sending cookie to user
app.use((req, res, next) => {
  res.cookie("server", "Connected to localhost server is running locally");
  next();
});

// Handling the route /
app.get("/", (req, res) => {
  res.send("<h2>Welcome to express </h2>");
});
// Handling  the route /about
app.get("/about", (req, res) => {
  res.send("My name is qwerty");
});
//Getting the form if  the route is /form
app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});
//capturing all the data filled by the user and send it in the response in the form of plain text
app.post("/json", (req, res) => {
  res.send(req.body);
});

//manipulating  the url and query from it 
app.get('/user:username' , (req ,res)=>{
  let username = req.params.username;
  res.end(username);
})

// Error Handler middelwares if the requested route is other than the '/' , 'form ','json','about' then it will throw an  error  404 page not found error along with the status code
app.use((req, res, next) => {
  if (
    req.url != "/" ||
    req.url != "/about" ||
    req.url != "/form" ||
    req.url != "/json"
  ) {
    next("404 Error page not found ");
  }
  next();
});

app.use((err, req, res, next) => {
  res.status(404).send(err);
  next();
});
// listening the request on the port 3K
app.listen(3000, () => {
  console.log("Iistening the request on the port 3K");
});
