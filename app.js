const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

//request from our server to client server
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})
app.listen(3000, function(){
  console.log('Running server on port 3000.');
})