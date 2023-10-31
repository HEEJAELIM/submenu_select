$(function () {
  var $firstMenu = $("nav > ul > li"),
    $header = $("header");
  $headerHeight = $header.outerHeight();

  $firstMenu
    .mouseenter(function () {
      var currentMenu = $(this);
      // 헤더 높이 값 지정
      var subHeight = currentMenu.find("ul").outerHeight();
      $header.stop().animate({ height: $headerHeight + subHeight + "px" }, 200);
      // setTimeout(할일, 시간); 할일 function() {}
      setTimeout(function () {
        currentMenu.find("ul").show();
      }, 100);
      // 메뉴 보이기
      // $(this).find("ul").show(500);
    })
    .mouseleave(function () {
      $header.stop().animate({ height: $headerHeight + "px" }, 100);
      $(this).find("ul").hide(50);
    });
});
