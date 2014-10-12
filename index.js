var express = require('express')
var app = express();
var buffer = fs.readFileSync(index.html);
var bufString = buffer.toString();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
//  response.send('Hello World2!')
  response.send(bufString)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
