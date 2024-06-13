const express = require('express');
const app = express();

// Simple request time logger
app.get('/',(req,res)=>{
  res.send('Please Log in<a>/login</a>')
})
app.use((req, res, next) => {
  console.log("A new request received at " + Date.now());
  console.log(`Login url ${req.url}`)
  console.log(`Login Method ${req.method}`)

   next();  
});

app.get('/login', (req, res) => {
  res.send('You are Logged IN');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));