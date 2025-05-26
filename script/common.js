$(function () {
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