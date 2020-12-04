const responsive = {
    0:{
        items:1
    },
    200:{
        items:1
    },
    500:{
        items:2
    },
    900:{
        items:3
    }


};

$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    // Adding Event Listener

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    
// Owl Carousel  For Blog

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    dots:false, 
    nav:true,
    navText:[$('.owl-navigation .owl-nav-prev') , $('.owl-navigation .owl-nav-next')],
    responsive:responsive
});


// Click to Scroll Up 

$('.move-up span').click(function(){
    $('html , body').animate({
        scrollTop:0
    }, 1000)
})
});