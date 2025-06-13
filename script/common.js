$(function () {

  // 각 메뉴별 display
  $(".header_b li:first-child, .nav_woman").on({
    mouseenter: function(){
      $(".nav_woman").stop(true).slideDown();
    },
    mouseleave: function(){
      $(".nav_woman").stop(true).slideUp();
    }
  });
  $(".header_b li:nth-child(2), .nav_man").on({
    mouseenter: function(){
      $(".nav_man").stop(true).slideDown();
    },
    mouseleave: function(){
      $(".nav_man").stop(true).slideUp();
    }
  });
  $(".header_b li:nth-child(3), .nav_bag").on({
    mouseenter: function(){
      $(".nav_bag").stop(true).slideDown();
    },
    mouseleave: function(){
      $(".nav_bag").stop(true).slideUp();
    }
  });
  $(".header_b li:nth-child(4), .nav_campaign").on({
    mouseenter: function(){
      $(".nav_campaign").stop(true).slideDown();
    },
    mouseleave: function(){
      $(".nav_campaign").stop(true).slideUp();
    }
  });
  $(".header_b li:last-child, .nav_ab").on({
    mouseenter: function(){
      $(".nav_ab").stop(true).slideDown();
    },
    mouseleave: function(){
      $(".nav_ab").stop(true).slideUp();
    }
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