const express = require('express');
const app = express();


// MIDDLEWARE



// ROUTES
app.get('/', (req, res) => {
  res.send('<h1>AUTH API</h1>')
})


// SERVER
app.listen(3001, () => {
  return console.log(`Server connected at http://localhost:3001`)
})