const express = require("express");
const app = express();
const port = 3000;
const routesLogin = require("./routes/login");

app.use(express.json()); // send data -> postman
app.use(express.urlencoded({ extended: true })); //

app.use(routesLogin);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});