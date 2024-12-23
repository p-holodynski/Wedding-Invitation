// Global variables
let currentLanguage = 'en';  // Default language

// Get that hamburger menu cookin' //
document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  };
});

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

$('#toTop').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("toTop").style.opacity = "1";
  } else {
    document.getElementById("toTop").style.opacity = "0";
  }
}

$("#changeLanguage").on('click', function(e) {
  currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
  updateLanguage(currentLanguage);
});

function updateLanguage(language) {
  const elements = document.querySelectorAll('[data-en]');
  
  elements.forEach(element => {
      element.textContent = element.getAttribute(`data-${language}`);
  });

  // Optionally save the language preference in local storage
  localStorage.setItem('preferredLanguage', language);
};

// Load the preferred language from local storage if available
let savedLanguage = localStorage.getItem('preferredLanguage');
if (savedLanguage) {
  currentLanguage = savedLanguage;
  updateLanguage(currentLanguage);
};

// Preloader
$(document).ready(function($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});
$(window).on('load', function() {
  var Body = $("body");
  Body.addClass("preloader-site");
});
