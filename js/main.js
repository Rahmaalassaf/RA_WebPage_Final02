$(document).ready(function () {
  $(".nav-item a").click(function () {
    //removing the previous selected menu state
    $(".nav-item").find(".active").removeClass("active");
    //adding the state for this parent menu
    $(this).addClass("active");
  });
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 200) {
    $(".navbar").addClass("changebg");
    $(".navbar-brand span").addClass("hidetxt");
  } else {
    $(".navbar").removeClass("changebg");
    $(".navbar-brand span").removeClass("hidetxt");
  }
});

$sectionOne = document.getElementById("sectionone").offsetTop;
$sectionTwo = document.getElementById("history").offsetTop;
$sectionThree = document.getElementById("sectionthree").offsetTop;
$sectionFour = document.getElementById("sectionfour").offsetTop;
$sectionFive = document.getElementById("designers").offsetTop;
$sectionSix = document.getElementById("projects").offsetTop;

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < $sectionTwo) {
      $(".navbar .navbar-brand img").attr("src", "./img/logo1.png");
    } else if (
      $(this).scrollTop() > $sectionTwo &&
      $(this).scrollTop() < $sectionThree
    ) {
      $(".navbar .navbar-brand img").attr("src", "./img/logo2.png");
    } else if (
      $(this).scrollTop() > $sectionThree &&
      $(this).scrollTop() < $sectionFour
    ) {
      $(".navbar .navbar-brand img").attr("src", "./img/logo1.png");
    } else if (
      $(this).scrollTop() > $sectionFour &&
      $(this).scrollTop() < $sectionFive
    ) {
      $(".navbar .navbar-brand img").attr("src", "./img/logo2.png");
    } else if (
      $(this).scrollTop() > $sectionFive &&
      $(this).scrollTop() < $sectionSix
    ) {
      $(".navbar .navbar-brand img").attr("src", "./img/logo1.png");
    }
  });
});
