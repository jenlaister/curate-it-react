var express = require('express');
var path = require('path');
var open = require('open');
var compression = require('compression');

/*eslint-disable no-console */

const port = process.env.PORT || 8080;
const app = express();


app.use(compression());
app.use(express.static('build'));

app.get('*', function(req, res) {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
