import express = require('express');
import router from './routes/index.router';

const app = express();
app.use(express.static('uploads'));

app.use('/', router);

app.get('/', (req, res) => {
  res.send(["andersenLife"]);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
