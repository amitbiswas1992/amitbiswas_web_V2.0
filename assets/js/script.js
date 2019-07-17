$("#menu-toggle,#menu-close").click(function(){
    $("#menu").toggleClass("active");
});

var stickyTop = 100;

function stickyHeader() {
    if ($(window).scrollTop() >= stickyTop) {
        $('#nav-bar').addClass('sticky');
    } else {
        $('#nav-bar').removeClass('sticky');
    }
}

$(window).on( 'scroll', function(){
    stickyHeader();
});



// goto top
var btn = $('#goto-top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});