$(document).ready(function () {
    $(window).scroll(function (event) { 
        var pos_body = $('html, body').scrollTop();
        console.log(pos_body)
        if (pos_body>20) {
            $('.menu').addClass('co-dinh-menu');
            $('.connect').hide();
        }
        else{
            $('.menu').removeClass('co-dinh-menu');
            $('.connect').show();
        }
    });
});