let isGoTop=!1;$(".o-gotop").click((function(){isGoTop||($("html,body").animate({scrollTop:0},300),isGoTop=!0,setTimeout((function(){isGoTop=!1}),300))}));const releaseSwiper=new Swiper(".l-newRelease__swiper",{slidesOffsetBefore:100,slidesPerView:7,spaceBetween:20,slidesOffsetBefore:0,navigation:{nextEl:".--next",prevEl:".--prev"},scrollbar:{el:".swiper-scrollbar"}});releaseSwiper.scrollbar.$dragEl.css("background","#e60012");