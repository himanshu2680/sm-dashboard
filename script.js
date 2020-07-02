$('#dark-mode').change(function(){
    if($(this).is(':checked')) {
        $("body, .lt-dark-text, .card, .header-mine").addClass("dt");
    } else {
        $("body, .lt-dark-text, .card, .header-mine").removeClass("dt");
    }
});