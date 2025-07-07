 // Match your header height
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, 
        behavior: 'smooth'
      });
    }
  });
});
  //menu-toggle
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const headerBanner = document.getElementById("header-banner");
  
    menuToggle.addEventListener("click", function () {
      headerBanner.classList.toggle("show"); 
    });
  });

//social 
window.onscroll = function() {myfunction()};
var social = document.querySelector(".social");
var Sticky = social.offsetTop;
var scrollTimeout;

function myfunction(){
  if(window.scrollY>= Sticky){
    social.classList.add("hidden");
  } else {
    social.classList.remove("hidden");
  }

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(function() {
    social.classList.remove("hidden");
  }, 1000);
}
//arrow
document.querySelector('.down-arrow-button').addEventListener('mouseover', function (e) {
  e.preventDefault();
  const contactSection = document.querySelector('#contact');
  if (contactSection) {
    smoothScroll(contactSection, 800); 
  }
});

document.querySelector('.up-arrow-button').addEventListener('mouseover', function (e) {
  e.preventDefault();
  const homeSection = document.querySelector('#home');
  if (homeSection) {
    smoothScroll(homeSection, 800); 
  }
});

document.querySelector('.down-arrow-button').addEventListener('mouseover', function () {
  this.style.backgroundColor = 'blue';
});
document.querySelector('.down-arrow-button').addEventListener('mouseout', function () {
  this.style.backgroundColor = ''; 
});

document.querySelector('.up-arrow-button').addEventListener('mouseover', function () {
  this.style.backgroundColor = 'green'; 
});
document.querySelector('.up-arrow-button').addEventListener('mouseout', function () {
  this.style.backgroundColor = ''; 
});

// Smooth scroll function
function smoothScroll(target, duration) {
  const targetPosition = target.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animationScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animationScroll);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animationScroll);
}


  function pdf() {
    console.log("Mouse is hovering over the button.");
    
  }
  document.getElementById("openPdfButton").addEventListener("click", function () {
    window.open("ArulVResume.pdf", "_blank");
  });
