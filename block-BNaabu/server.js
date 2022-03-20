let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.send("Welcome  to the home page ");
});
//handling  the route /about
app.get("/about", (req, res) => {
  res.send("this is the about us page . Get to know about us");
});

// Error handling midddelware if the route is other than the '/' and '/about  then this will thorow an error'
// handling the route /
app.use((req, res, next) => {
  if (req.url != "/" || req.url != "/about") {
    return next("404 Error page not found");
  }
});
//thorwing an error message on the screen if the route is not matched
app.use((err, req, res, next) => {
  res.send(err);
});

// Listening  the Request on the server on the port 7K
app.listen(7000, () => {
  console.log("listening the request on the port 7000");
});
