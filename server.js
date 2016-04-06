var express = require('express');
var bodyParser = require('body-parser');
var url = require('url')
var app = express();
var cors = require('cors');

var corsOptions = {
  origin: 'https://compose.mixmax.com',
  credentials: true
};

app.use(cors(corsOptions))

app.set('view engine', 'jade');

// Serve assets in /public.
app.use(express.static(__dirname + '/public'));

// So we can POST.
app.use(bodyParser.urlencoded());



app.get('/editor', function (req, res) {
  var queryData = url.parse(req.url, true).query

  if (queryData.data){
    var data = JSON.parse(queryData.data)
    res.render('editor', { 'apple': data['apple'], 'google': data['google'], 'amazon': data['amazon'],});
  } else {
    res.render('editor', {});
  }

});


app.get('/editor', function(req, res) {
  res.sendFile(__dirname + '/editor.html');
});

// The in-email representation.
app.post('/api/resolver', require('./api/resolver'));

app.listen(process.env.PORT || 8910);
