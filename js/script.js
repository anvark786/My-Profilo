function resize(){

}

$(document).ready(function(){
    resize();
});
  
$(window).resize(function(){
    resize();
});

$(window).on('load',function(){
    resize();
});

$(document).ready(function(){
    $('.counter').each(function (){ 
        var $this = $(this),
        countTo = $this.attr('data-count');
        $({ countNum:$this.text() }).animate({
            countNum:countTo
        },
        {
            duration:3000,
            easing:'linear',
            step:function(){
                $this.text(Math.floor(this.countNum));
            },
            complete:function(){
                $this.text(this.countNum);
            }
        });          
    });  
    
    $('span.menu-icon').click(function () {        
        $('#home header nav.menu').slideDown('slow',function(){
            $('span.menu-icon').hide();
            $('span.close-icon').show();
        });
    });
    $('span.close-icon').click(function () { 
        $('#home header nav.menu').slideUp('slow',function(){
            $('span.close-icon').hide();
            $('span.menu-icon').show();
        });        
    });
    $('#spotlight div.right').fadeIn("slow","swing");

    $('#testinomials .bottom').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: "2000",
        centerPadding:'100px',


    });
   
    
});
