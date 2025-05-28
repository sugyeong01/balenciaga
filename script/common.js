$(function () {

  // $(".header_b li, .navbox").on({
  //   mouseenter: function () {
  //     $(".navbox").stop(true, true).animate({
  //       top: "116px"
  //     }, 500);
  //     console.log("enter")
  //   },
  //   mouseleave: function () {
  //     $(".navbox").stop(true, true).animate({
  //       top: "-100%"
  //     }, 500);
  //   },
  // });
  $(".header_b li, .navbox").on({
    mouseover: function () {
      $(".navbox").stop(true, true).animate({
        opacity: "1"
      }, 500);
      console.log("enter")
    },
    mouseleave: function () {
      $(".navbox").stop(true, true).animate({
        opacity: "0"
      }, 500);
      console.log('leave')
    },
  });
  // 각 메뉴별 display
  $(".header_b li:first-child, .nav_woman").on({
    mouseenter: function(){
      $(".nav_woman").css("display", "block")
      console.log('woman')
    },
    mouseleave: function(){
      $(".nav_woman").css("display", "none")
    },
  });
  $(".header_b li:nth-child(2), .nav_man").on({
    mouseenter: function(){
      $(".nav_man").css("display", "block")
      console.log('man')
    },
    mouseleave: function(){
      $(".nav_man").css("display", "none")
    },
  });
  $(".header_b li:nth-child(3), .nav_bag").on({
    mouseenter: function(){
      $(".nav_bag").css("display", "block")
    },
    mouseleave: function(){
      $(".nav_bag").css("display", "none")
    },
  });
  $(".header_b li:nth-child(4), .nav_campaign").on({
    mouseenter: function(){
      $(".nav_campaign").css("display", "block")
    },
    mouseleave: function(){
      $(".nav_campaign").css("display", "none")
    },
  });
  $(".header_b li:last-child, .nav_ab").on({
    mouseenter: function(){
      $(".nav_ab").css("display", "block")
    },
    mouseleave: function(){
      $(".nav_ab").css("display", "none")
    },
  });

  // hidemenu- (max-width: 1200px)
  $(".ham").on("click", function(){
    $(".hidemenu").css("display", "block");
    $("body").css({
        height: "100vh",
        overflow: "hidden"
    });
})
  $(".xmark").on("click", function(){
    $(".hidemenu").css("display", "none");
    $("body").css({
        height: "auto",
        overflow: "auto"
    });
});

// footer
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