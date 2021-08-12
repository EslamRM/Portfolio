$(function () {
  // AOS Ainmation
  AOS.init();
  // js typer
  var subElementArray = $.map($(".sub-element"), function (el) {
    return $(el).text();
  });
  $(".element").typed({
    strings: subElementArray,
    typeSpeed: 30,
    contentType: "html",
    showCursor: false,
    loop: true,
    loopCount: true,
  });
  //smoothly scroll to elements
  $("nav div a:not(:last)").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top,
      },
      1000
    );
  });
  var btn = $("#button");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
  // dark mode siwtch button
  $(".switch").click(function() {
    $("#body").toggleClass("dark");
    $(".moon").fadeToggle();
    $(".sun").fadeToggle();
  });
  // navbar button
  $("#btn-menu").click(function() {
    $("#menu").toggleClass("hidden2");
  });
  // switch button
  $("#btn-menu").click(function() {
    $("button#switch").toggleClass("switch2");
    console.log("clicked");
  });
});
