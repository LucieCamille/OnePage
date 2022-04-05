let slideIndex = 1;
showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("present__about_post");
  let dots = document.getElementsByClassName("present__about_bullet");
  let activeDot = document.querySelector(".present__about_bullet-active"); 
  if (activeDot != null) {
    activeDot.className = "present__about_bullet";
  }
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("-active", "");
  }
  slides[slideIndex-1].style.display = "grid";
  dots[slideIndex-1].className = "present__about_bullet-active";
}