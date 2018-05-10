$(document).ready(function() {
    var windowHeight = window.innerHeight;
    var body = $('body');
    var left_side = $('#left_side');
    left_side.height(windowHeight);
    body.height(windowHeight);
    // console.log(windowHeight);

    $('#content button').hover(function() {
        $(this).find('a').css('color', 'rgba(255, 255, 255, 0.8)');
    });
    $('#content button').mouseleave(function() {
        $(this).find('a').css('color', 'rgba(226,98,7,1)');
    });

    $('#social a.facebook').hover(function() {
        // console.log(this);
        var img = $(this).find('img');
        var width = img.width();
        img.attr('src', 'images/facebook_orange.svg');
        // img.css('width', width + 10);
    });
    $('#social a.facebook').mouseleave(function() {
        // console.log(this);
        var img = $(this).find('img');
        var width = img.width();
        img.attr('src', 'images/facebook.svg');
        // img.css('width', width - 20);
    });

    $('#social a.contact').hover(function() {
        // console.log(this);
        var img = $(this).find('img');
        var width = img.width();
        img.prop('src', 'images/contact_orange.svg');
    });
    $('#social a.contact').mouseleave(function() {
        // console.log(this);
        var img = $(this).find('img');
        var width = img.width();
        img.prop('src', 'images/contact.svg');
    });

    $('#content a.phone').hover(function() {
        var img = $(this).find('img');
        img.prop('src', 'images/phone.svg');

    });
    $('#content a.phone').mouseleave(function() {
        // console.log(this);
        var img = $(this).find('img');
        img.prop('src', 'images/phone_orange.svg');
    });

    // $('#content button').hover(function() {
    //     $(this).find('span').css('opacity', '0.4')
    // });
    // $('#content button').mouseleave(function() {
    //     $(this).find('span').css('opacity', '1')
    // });

    // $( "td" ).toggle(
    //     function() {
    //         $( this ).addClass( "selected" );
    //     }, function() {
    //         $( this ).removeClass( "selected" );
    //     }
    // );


});
