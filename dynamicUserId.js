const express = require('express');
const app = express();

// Simple request time logger

app.use((req, res, next) => {
//   console.log("A new request received at " + Date.now());
  console.log(`Login url ${req.url}`)
//   console.log(`Login Method ${req.method}`)
   next();  
});

app.get('/user/:id', (req, res) => {
  res.send(`Hello ${req.params.id}`);
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));