let timer;

        $('nav .list-nav ul li a').hover(function (e) {
            $(e.target.parentElement.firstChild).css({'transform':'scale(1,1)'});
               if(e.target.parentElement.classList.contains('sub-menu')){
                   let section = e.target.parentElement.lastChild;
                   clearTimeout(timer);
                    timer = setTimeout(() => {
                        $(section).fadeIn(300);
                    }, 150);
               }
            
            },function(e){
                $(e.target.parentElement.firstChild).css({'transform':'scale(0,0)'});
                if(e.target.parentElement.classList.contains('sub-menu')){
                   let section = e.target.parentElement.lastChild;
                   clearTimeout(timer);
                    timer = setTimeout(() => {
                        $(section).fadeOut(300);
                    }, 150);
               }
            }
        );



        // let timerTow;
        // $('nav .iconbar-nav ul li a').hover(function (e) {
            
        //     if(e.target.parentElement.classList.contains('sub-menu')){
        //         let section = e.target.parentElement.lastChild;
        //         console.log(section);
        //         clearTimeout(timer);
        //          timer = setTimeout(() => {
        //              $(section).fadeIn(300);
        //          }, 150);

        //         // $(section).fadeIn(300);

        //     }
                
        //     }, function (e) {
        //         if(e.target.parentElement.classList.contains('sub-menu')){
        //             let section = e.target.parentElement.lastChild;
        //             clearTimeout(timer);
        //              timer = setTimeout(() => {
        //                  $(section).fadeOut(300);
        //              }, 150);

        //             //  $(section).fadeOut(300);

        //         }
        //     }
        // );



// slider main 
var boxSliderPlagin = $('.slider-main')
boxSliderPlagin.owlCarousel({
items:1,
autoplay:true,
autoplayTimeout:2000,
})