var express = require('express')
var app = express();
var fs = require('fs');
var bufferTest = fs.readFileSync('index.html');
var bufString = bufferTest.toString();

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(bufString)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
