$(document).ready(function () {
    /*======toggle-icon=====*/
    var nav = document.getElementById('colToggle');

    colToggle.onclick = function () {

        colToggle.classList.toggle('active');

    }
    /*======toggle-nav=====*/
    $('#colToggle').click(function () { 

        $('#slideNav').addClass('slide-nav')
    
    
    })
    $('#navClose').click(function () {
    
        $('#slideNav').removeClass('slide-nav')
    
    
    })
    
    $(".slide-testi").slick({
    
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

        
        responsive:[

            {
                breakpoint: 576, 
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        
        
        ]
        
    })

    /*===========slide start herre=========*/
    
    $('.product-slide').slick({
    
              
        slidesToScroll: 1,
        slidesToShow: 2,
                
        
        
    
    
    })
    $('.popular-slide').slick({
        slidesToScroll:1,
        slidesToShow: 1,
        dots: true,
        arrows: false,
    })

})