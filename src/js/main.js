//gotop
let isGoTop = false;
$('.o-gotop').click(function(){
  if(!isGoTop){
    $('html,body').animate({
      scrollTop: 0
    },300);
    isGoTop = true;
    setTimeout(function(){
      isGoTop = false;
    },300)
  }
})




// swiper
const releaseSwiper = new Swiper('.l-newRelease__swiper',{
  slidesOffsetBefore : 100,
  slidesPerView :7,
  spaceBetween : 20,
  slidesOffsetBefore : 0,
  navigation: {
    nextEl: '.--next',
    prevEl: '.--prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
releaseSwiper.scrollbar.$dragEl.css('background','#e60012');

