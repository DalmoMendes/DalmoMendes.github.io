$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:1,
    stagePadding:30,
    smartSpeed:450,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        600:{
            items:3
        },
        800:{
            items:4
        },
        1000:{
            items:5
        }
    }
})