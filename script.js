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





document.addEventListener("DOMContentLoaded", function() {
  const counterDisplay = document.querySelector('.counter');
  const counterResult = document.querySelector('.counter-result');
  const plusBtn = document.querySelector('.fa-plus');
  const minusBtn = document.querySelector('.fa-minus');
  const purchaseBtn = document.querySelector('.btn');

  let counter = parseInt(counterDisplay.textContent);
  let total = counter * 100;

  // Update counter display and total
  function updateCounter() {
    counterDisplay.textContent = counter;
    counterResult.textContent = `$${total}`;
  }

  // Increment counter and update
  plusBtn.addEventListener('click', function() {
    counter++;
    total = counter * 100;
    updateCounter();
  });

  // Decrement counter and update
  minusBtn.addEventListener('click', function() {
    if (counter > 0) {
      counter--;
      total = counter * 100;
      updateCounter();
    }
  })
  purchaseBtn.addEventListener('click', function() {
    console.log(`Purchase ${counter} items for a total of $${total}`);
  });
})






//user sitting
function toggle() {
  
  const myDiv = document.querySelector('.uesr-sitting');
  
  myDiv.style.visibility = myDiv.style.visibility == 'hidden' ? 'visible' : 'hidden'; 
}



// dark mode
document.addEventListener("DOMContentLoaded", function() {
  const dmodeBtn = document.querySelector('.dmode-btn');
  const body = document.querySelector('body');
  
  // Function to toggle dark mode
  function toggleDarkMode() {
    body.classList.toggle('dark-mode');
  }

  // Event listener for the dark mode toggle button
  dmodeBtn.addEventListener('click', toggleDarkMode);
});