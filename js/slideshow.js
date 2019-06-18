    function slideshow(){
        var slide_sau=$('active').next();
        $('.active').addClass('.chuyentrai').one('webkitAnimationEnd',function(event){
            $('.chuyentrai').removeClass('.chuyentrai').removeClass('.active')
        });
        slide_sau.addClass('.active').addClass('.chuyenphai').one('event name', function(event){
            $('.chuyenphai').removeClass('.chuyenphai');
        });
    }