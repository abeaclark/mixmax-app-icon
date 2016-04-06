$( document ).ready(function() {
  $('#main-form').on('submit', function(e){
    e.preventDefault();
    console.log('clicked submit')
    done(e);
  });


  var done = function(e) {
    var apple = $('#apple').next().val();
    var google = $('#google').next().val();
    var amazon = $('#amazon').next().val();

    // Let Mixmax know it was done.
    Mixmax.done({
      apple: apple,
      google: google,
      amazon: amazon,
    });
  };

  var cancel = function() {
    Mixmax.cancel();
  };

});
