$(document).ready(function() {
    var windowHeight = window.innerHeight;
    var body = $('body');
    var left_side = $('#left_side');
    left_side.height(windowHeight);
    body.height(windowHeight);
    console.log(windowHeight);

});
