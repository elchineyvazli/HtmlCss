var nextBtn = document.querySelector(".gallery .buttons .next");
var prevBtn = document.querySelector(".gallery .buttons .prev");
var slide = document.querySelectorAll(".gallery .photos .block");
var i = 0;

prevBtn.onclick = function() {
  slide[i].classList.remove("active");
  i--;

  if (i < 0) {
    i = slide.length - 1;
  }
  slide[i].classList.add("active");
};

nextBtn.onclick = function() {
  slide[i].classList.remove("active");
  i++;

  if (i >= slide.length) {
    i = 0;
  }

  slide[i].classList.add("active");
};

$('.owl-books').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    responsive:{
        600:{
            items:4
        }
    }
});