const express = require('express');
const cors = require('cors');
const fs = require('fs');
const csv = require('csv-parser');
var content = {};
fs.createReadStream('./ra_data_classifier.csv')
  .pipe(csv())
  .on('data', (row) => {
    content[row.hid] = row;
  })
  .on('end', () => console.log('file parsed success'));

const app = express();
var port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/api/", (req, res, next) => {
  let { hid } = req.query;
  console.log(content[hid]);
  res.send({ "data": content[hid] });
});

app.post("/api/hid", (req, res, next) => {
  let { hid } = req.body;
  res.send({ "data": content[hid] });
});

app.use("/", (req, res, next) => {
  res.send({ "status": "invalid route" });
})

app.listen(port, console.log(`server is running on ${port}`))

