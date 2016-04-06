module.exports = function(req, res) {

  var data = JSON.parse(req.body.params)
  console.log(data)

  console.log('data.apple', data.apple)


  var apple_link = data['apple']
  var google_link = data['google']
  var windows_link = data['windows']
  var amazon_link = data['amazon']

  console.log(apple_link)
  console.log(google_link)
  console.log(windows_link)
  console.log(amazon_link)

  if (apple_link) {
    apple_link = "<a href='" + apple_link + "' ><img style='height: 35px; display: inline;' src='https://i.imgsafe.org/459aed6.png'></a>"
  }

  if (google_link) {
    google_link = "<a href='" + google_link + "' ><img style='height: 35px; display: inline;' src='https://i.imgsafe.org/469418c.png'></a>"
  }

  if (windows_link) {
    windows_link = "<a href='" + windows_link + "' ><img style='height: 35px; display: inline;' src='https://i.imgsafe.org/4787215.png'></a>"
  }

  if (amazon_link) {
    amazon_link = "<a href='" + amazon_link + "' ><img style='height: 35px; display: inline;' src='https://i.imgsafe.org/4514322.png'></a>"
  }

  console.log(apple_link)
  console.log(google_link)
  console.log(windows_link)
  console.log(amazon_link)

  var html = "<div>" + apple_link + google_link + windows_link + amazon_link +"</div>"
  console.log(html)

  // var html = '<span><img src="https://zello.com/img/appstore.png"></span>'

  res.json({
    body: html
    // Add raw:true if you're returning content that you want the user to be able to edit
  });
};