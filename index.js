const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  console.log("server given backshots");
  res.status(200).json({
    msg: "KYS"
  })
});

app.listen(PORT);

