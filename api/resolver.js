module.exports = function(req, res) {

  var data = JSON.parse(req.body.params)

  var apple_link = data['apple']
  var google_link = data['google']
  var amazon_link = data['amazon']

  if (apple_link) {
    apple_link = "<a href='" + apple_link + "' ><img style='height: 35px; display: inline;' src='https://i.imgsafe.org/459aed6.png'></a>"
  }

  if (google_link) {
    google_link = "<a href='" + google_link + "' ><img style='height: 35px; display: inline;' src='https://i.imgsafe.org/469418c.png'></a>"
  }

  if (amazon_link) {
    amazon_link = "<a href='" + amazon_link + "' ><img style='height: 35px; display: inline;' src='https://i.imgsafe.org/4514322.png'></a>"
  }

  var html = "<div style='width: 100%;'>" + apple_link + google_link + amazon_link +"</div>"

  res.json({
    body: html
  });
};