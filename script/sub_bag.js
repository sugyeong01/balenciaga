$(document).ready(function() {
    let itemsPerClick = 8;
    let totalShown = 0;
  
    $('.item_btm .item').slice(0, itemsPerClick).show();
    totalShown += itemsPerClick;
  
    $('#viewMore').click(function() {
      $('.item_btm .item').slice(totalShown, totalShown + itemsPerClick).fadeIn();
      totalShown += itemsPerClick;
    
        // 빈 아이템 클릭시 제거
        $('.item_btm .item_none').remove();
  
      if (totalShown >= $('.item_btm .item').length) {
        $(this).hide();
      }
    });

    // 필터 버튼 토글
    $("#filter_btn").click(function(){
      $(".filter_tab").slideToggle();
    });
  });