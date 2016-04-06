var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var cors = require('cors');

var corsOptions = {
  origin: 'https://compose.mixmax.com',
  credentials: true
};

app.use(cors())

// Serve assets in /public.
app.use(express.static(__dirname + '/public'));

// So we can POST.
app.use(bodyParser.urlencoded());



// The editor interface.
app.get('/editor', function(req, res) {
  res.sendFile(__dirname + '/editor.html');
});

// The in-email representation.
app.post('/api/resolver', require('./api/resolver'));

app.listen(process.env.PORT || 8910);
