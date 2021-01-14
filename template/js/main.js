$(window).on('load',function(){
    $('.preloader').fadeOut('slow')
})

/////////////////////////////////////
window.onload = function(){
    /////// Navbar Shrink ///////
    window.onscroll= function(){
        if(this.scrollY > 90){
            document.querySelector('.navbar').classList.add('navbar-shrink')
        }else{
            document.querySelector('.navbar').classList.remove('navbar-shrink')
        }
    }
    
    /////// Video Popup  ///////
    const videoSrc = document.querySelector('#player-1');
    const x = document.querySelector('.video-play-btn');
    const y = document.querySelector('.video-popup');
    const a =document.querySelector('.video-popup-close');
    const s = videoSrc.getAttribute('src');
    x.onclick = function(){
        y.classList.add('open');
            if(videoSrc.getAttribute('src')===''){
            videoSrc.setAttribute('src',s);
        }
    }
    y.onclick = function(){
        if(y.classList.contains('open')){
            y.classList.remove('open');
            if(videoSrc.getAttribute('src')!==''){
                videoSrc.setAttribute('src','')
            }
        }
    }  
   
    //////// Contact Us Input ////////
    let myInput = document.querySelectorAll('input');
    for(i = 0 ;i<myInput.length ; i++){
        myInput[i].onfocus=function(){
            this.setAttribute("data-place",this.getAttribute("placeholder"));
            this.setAttribute("placeholder","")
        }
        myInput[i].onblur=function(){
            this.setAttribute("placeholder",this.getAttribute("data-place"));
            this.setAttribute("data-place","")  
        }

    }
    //////// Contact Us Textarea ////////
    let myTextArea = document.querySelector('textarea');
    myTextArea.onfocus = function(){
        this.setAttribute('data-place',this.getAttribute('placeholder'));
        this.setAttribute('placeholder','')
    }
    myTextArea.onblur = function(){
        this.setAttribute('placeholder',this.getAttribute('data-place'));
        this.setAttribute('data-place','')
    }
    //////// Features Carousel /////////
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
                
            },
            1000:{
                items:3,
                
            }
        }
    })
    //////// Screenshots Carousel /////////
    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
                
            },
            1000:{
                items:4,
                
            }
        }
    });
    //////// Testimonials Carousel /////////
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
                
            },
            1000:{
                items:3,
                
            }
        }
    })
    //////// Team Carousel /////////
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
                
            },
            1000:{
                items:3,
                
            }
        }
    }) ;
    ////////// Page Scrolling - scrollIt//////////// 
   $.scrollIt({
       topOffset:-50
   });
   ////////// Navbar Collapse ////////////
   $('.nav-link').on("click" , function(){
       $('.navbar-collapse').collapse("hide");
   })
   /////////// Toggle Theme - light & Dark Mode///////////
   let myB = document.querySelector('body')
   function toggleTheme(){
       if(localStorage.getItem('shala-theme')!== null){
           if(localStorage.getItem('shala-theme')==='dark'){
            myB.classList.add('dark')
           }else{
            myB.classList.remove('dark')
           }
       }
       updateIcon();
   }
   toggleTheme();
   document.querySelector('.toggle-theme').onclick = function(){
        myB.classList.toggle("dark");
       if(myB.classList.contains("dark")){
           localStorage.setItem('shala-theme','dark')
       }else{
        localStorage.setItem('shala-theme','light')
       }
       updateIcon()
   }
   function updateIcon(){
       if(myB.classList.contains('dark')){
           document.querySelector('.toggle-theme i').classList.remove("fa-moon");
           document.querySelector('.toggle-theme i').classList.add("fa-sun")
       }else{
            document.querySelector('.toggle-theme i').classList.remove("fa-sun");
            document.querySelector('.toggle-theme i').classList.add("fa-moon")
       }
   }

}

/*

$(document).ready (function(){
    ///////// Navbar Shrink ///////////
    $(window).on('scroll',function(){
        if($(this).scrollTop()>90){
            $('.navbar').addClass('navbar-shrink')
        }else{
            $('.navbar').removeClass('navbar-shrink')
        }
    })
    ///////// Video Popup ////////////
   const videoSrc = $("#player-1").attr('src');
    $('.video-play-btn ,.video-popup').on('click',function(){
        if($('.video-popup').hasClass('open')){
            $('.video-popup').removeClass('open');
            $('#player-1').attr('src','')
         }else{
            $('.video-popup').addClass('open');
            if( $('#player-1').attr('src')==''){
            $('#player-1').attr('src',videoSrc)
            }
        }
    });
    //////// Features Carousel /////////
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
                
            },
            1000:{
                items:3,
                
            }
        }
    })
    //////// Screenshots Carousel /////////
    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
                
            },
            1000:{
                items:4,
                
            }
        }
    });
    //////// Testimonials Carousel /////////
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
                
            },
            1000:{
                items:3,
                
            }
        }
    })
    //////// Team Carousel /////////
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
                
            },
            1000:{
                items:3,
                
            }
        }
    })
})
*/