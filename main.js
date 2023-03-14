const buttons = document.querySelectorAll(".show-hide-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const hiddenText = button.nextElementSibling; 
    if (hiddenText.style.display === "block") {
      hiddenText.style.display = "none";
    } else {
      hiddenText.style.display = "block";
    }
  });

  button.addEventListener("click", () => {
    if (button.innerHTML === "show more details") {
      button.innerHTML = "show less details";
    } else {
      button.innerHTML = "show more details";
    }
  });
});


// **************     slide show         **********************

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
