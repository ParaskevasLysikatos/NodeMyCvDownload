
const express = require("express");
const app = express();

global.__basedir = __dirname;

const initRoutes = require("./routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});