const express = require('express');

const app = express();

app.use('/', (req, res) => {
  console.log('hi');
});

PORT = 3000;
app.listen(PORT, () => console.log('Express online'));
