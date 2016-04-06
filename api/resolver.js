module.exports = function(req, res) {

  var data = req.body
  console.log(data)

  var apple_link = data['apple'] || ''
  var google_link = data['google'] || ''
  var windows_link = data['windows'] || ''
  var amazon_link = data['amazon'] || ''

  if (apple_link) {
    apple_link = "<a href='" + apple_link + "' ><img src='http://mixmax-app-icon.herokuapp.com/img/apple.png'></a>"
  }

  if (google_link) {
    google_link = "<a href='" + google_link + "' ><img src='http://mixmax-app-icon.herokuapp.com/img/apple.png'></a>"
  }

  if (windows_link) {
    windows_link = "<a href='" + windows_link + "' ><img src='http://mixmax-app-icon.herokuapp.com/img/apple.png'></a>"
  }

  if (amazon_link) {
    amazon_link = "<a href='" + amazon_link + "' ><img src='http://mixmax-app-icon.herokuapp.com/img/apple.png'></a>"
  }

  var html = "<div>" + apple_link + google_link + windows_link + amazon_link +"</div>"

  var html = '<span><img src="https://zello.com/img/appstore.png"></span>'

  res.json({
    body: html
    // Add raw:true if you're returning content that you want the user to be able to edit
  });
};