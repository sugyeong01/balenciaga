$(function () {
   $(".header_b li, nav").on({
     mouseenter: function(){
       $("nav").stop().animate({
         top: "116px"
       }, 500, "swing");
     },
     mouseleave: function(){
       $("nav").stop().animate({
         top: "-100%"
       }, 500, "linear");
     },
   });


  $(".header_b li:first-child, .nav_woman").on({
    mouseover: function(){
      $(".nav_woman").css("display", "block")
    },
    mouseout: function(){
      $(".nav_woman").css("display", "none")
    },
  });
  $(".header_b li:nth-child(2), .nav_man").on({
    mouseover: function(){
      $(".nav_man").css("display", "block")
    },
    mouseout: function(){
      $(".nav_man").css("display", "none")
    },
  });
  $(".header_b li:nth-child(3), .nav_bag").on({
    mouseover: function(){
      $(".nav_bag").css("display", "block")
    },
    mouseout: function(){
      $(".nav_bag").css("display", "none")
    },
  });
  $(".header_b li:nth-child(4), .nav_campaign").on({
    mouseover: function(){
      $(".nav_campaign").css("display", "block")
    },
    mouseout: function(){
      $(".nav_campaign").css("display", "none")
    },
  });
  $(".header_b li:last-child, .nav_ab").on({
    mouseover: function(){
      $(".nav_ab").css("display", "block")
    },
    mouseout: function(){
      $(".nav_ab").css("display", "none")
    },
  });

  $('.menu_header').on('click', function () {
    const $item = $(this).closest('.menu_item');
    const $submenu = $item.find('.submenu');

    // 다른 메뉴 닫기
    $('.menu_item').not($item).removeClass('active').find('.submenu').slideUp();
    $('.menu_item').not($item).find('.arrowdown img').removeClass('rotate');

    // 현재 메뉴 토글
    $item.toggleClass('active');
    $submenu.stop().slideToggle();

    // 화살표 회전
    $item.find('.arrowdown img').toggleClass('rotate');
  });
});