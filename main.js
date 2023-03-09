menuBtn = document.querySelector("#burger_icon");
body = document.querySelector("body");
menuMobile = document.querySelector("#menu_mobile");
close = document.querySelector("#close");
linksMobile = document.querySelector("#links_m");

menuBtn.addEventListener("click", clickBtn);

function clickBtn() {
  body.classList.add("posFix");
  menuMobile.classList.add("posLeft");
  close.addEventListener("click", closeEvent);
  linksMobile.addEventListener("click", function () {
    body.classList.remove("posFix");
    menuMobile.classList.remove("posLeft");
  });
  function closeEvent() {
    body.classList.remove("posFix");
    menuMobile.classList.remove("posLeft");
  }
}

$(".slider_box").slick({
  autoplay: true,
  autoplaySpeed: 4000,
});

$(function () {
  var element = $("#botton_up"),
    display;
  $(window).scroll(function () {
    display = $(this).scrollTop() >= 250;
    if (display) {
      element.show();
    } else {
      element.hide();
    }
  });
});
