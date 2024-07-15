$(document).ready(function () {
  $("#yazici-animasyon")
    .mouseleave(function () {
      $(this).removeClass("tiklandi");
    })
    .dblclick(function () {
      $(this).addClass("tiklandi").html($(this).html());
    });
});
