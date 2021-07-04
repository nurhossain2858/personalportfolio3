$(window).on("load", function(){
    $(".preloader").addClass("loaded")
})

$(document).ready(function(){
    // nav toggle start
    $(".nav-toggle").click(function(){
        $(".header .nav").slideToggle();
        $(".nav-toggle").toggleClass("open");
    });
    $(".header .nav a").click(function(){
        if($(window).width() < 768){
            $(".header .nav").slideToggle();
            $(".nav-toggle").toggleClass("open");
        }
    })
    // nav toggle end

    // fixed header start
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".header").addClass("fixed");
        }
        else{
            $(".header").removeClass("fixed");
        }
    })
    // fixed header end

    // smooth scroll start
    $.scrollIt({
        scrollTime: 800,
    });
    // smooth scroll end
    // img popup start
    $('.work').magnificPopup({
        type:'image',
        delegate: 'a',
        gallery:{
            enabled:true
        }
    });
    // img popup end
});