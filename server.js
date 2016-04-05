var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var cors = require('cors');

// Serve assets in /public.
app.use(express.static(__dirname + '/public'));

// So we can POST.
app.use(bodyParser.urlencoded());



// Since Mixmax calls this API directly from the client-side, it must be whitelisted.
var corsOptions = {
  origin: true,
  credentials: true
};

app.use(cors(corsOptions));


// The editor interface.
app.get('/editor', function(req, res) {
  res.sendFile(__dirname + '/editor.html');
});

// The in-email representation.
app.post('api/resolver', require('./api/resolver'));

app.listen(process.env.PORT || 8910);
