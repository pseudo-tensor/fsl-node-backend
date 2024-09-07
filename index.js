const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.json());
app.set("view engine", "ejs");

app.get('/', async (req, res) => {
  console.log("server given backshots");
  res.render('index', {text: "kys"});
});

console.log(`App listening on port ${PORT}`);
app.listen(PORT);
