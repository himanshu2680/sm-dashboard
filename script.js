// var number = 1987;
// for (var i = 0; i < number; i++) {
// 	setInterval(function () {
// 		$("#card-number-main").html(i);
// 	}, 500)
// }
$('.count').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 1000,
    easing: 'swing',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});
$('#dark-mode').change(function(){
    if($(this).is(':checked')) {
        $("body, .lt-dark-text, .card, .header-mine").addClass("dt");
    } else {
        $("body, .lt-dark-text, .card, .header-mine").removeClass("dt");
    }
});