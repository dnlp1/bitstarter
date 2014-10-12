var express = require('express')
var app = express();
var bufferTest = fs.readFileSync(index.html);
//var bufString = buffer.toString();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello Billy Bob!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
