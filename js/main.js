$(document).ready(function(){



let mySwiper = new Swiper('.swiper-container',{
  pagination:'.swiper-pagination',
  direction:'vertical',
  paginationClickable:true,
  mousewheelControl:true,
  slidePerView:1

    
  

});
// swiper끝

$('.sec2bg').slick({
    autoplay:false,//자동실행
    speed:800,//애니매이션속도
    swipe:false,//마우스드래그 또는 모바일에서 손으로 쓸어넘기는 기능
    pauseOnFocus:false,//포커스가 갔을때 멈춤기능
    pauseOnHover:false,//마우스호버시 멈춤
    dots:true
});
// slick끝
$('.slideGallery').slick({
    autoplay: false,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3,
    pauseOnHover:true,
    focusOnSelect:true,
    dots:false,
    arrows:false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.swiper-wrapper .trailer .movie .btnPlay').on('click',function(e){
 e.preventDefault();
 let videolink = 'https://www.youtube.com/embed/3dtsL__R0K8'

 $('.popup').css({'display':'block' ,'opacity':0})
    .stop()
    .animate({'opacity':1},400);


            $('.popup .popup_inner .modal').find('iframe').attr('src','');
            
            $('.popup .popup_inner .modal').find('iframe').attr('src',videolink);
            $('body').css({'overflow':'hidden'});
        
    })
    $('.popup .popup_inner .modal a').on('click',function(e){
        e.preventDefault();

        $('.popup').stop()
            .animate({'opacity':1},400,function(){
                $('.popup').css({'display':'none'})
            });
            $('.popup .popup_inner .modal').find('iframe').attr('src','');
        
           
    });
    
    let sw= true;

    $('.btn_menu').on('click',function(){
      $(this).toggleClass('on');

    if(sw == true){
    $('.swiper-pagination').animate({left :-300 },300);
    $('.btn_menu').animate({left :370 },300);
    sw = false
    }else{
      $('.swiper-pagination').animate({left :-900 },300);
      $('.btn_menu').animate({left :187 },300);
      sw = true

    }
  });

    let sw2= true;

    $('.btn_menu_m').on('click',function(){
      $(this).toggleClass('on');

    if(sw2 == true){
    $('.swiper-pagination').animate({left :0 },100);
   
    sw2 = false
    }else{
      $('.swiper-pagination').animate({left :-130 },100);
   
      sw2 = true

    }
  });
  

 






  
});
// reday끝