// $(document).ready(function() {
//     $(window).scroll(function() {
//      var scrollTop = $(this).scrollTop();

//      // Check if scroll position is not at the top
//      if (scrollTop > 0) {
//         // Add a class when scrolled down
//         $('header').addClass('bg-transparent');
//         $('.header').css('background-color', '#000');
//      } else {
//         // Remove the class when at the top
//         $('header').removeClass('bg-white');
//         $('.header').css('background-color', '#000');
//      }
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
   // Get the initial position of the navbar
   var navbar = document.getElementById('navbar');
   var navbarOffset = navbar.offsetTop;

   // Function to handle the scroll event
   window.addEventListener('scroll', function () {
      // Get the current scroll position
      var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      // Check if the scroll position is below the initial offset
      if (scrollPosition >= navbarOffset) {
         // Add a class to make the navbar sticky
         navbar.classList.add('sticky');
      } else {
         // Remove the class if the scroll position is above the initial offset
         navbar.classList.remove('sticky');
      }

      // Change background color on scroll
      if (scrollPosition > 100) {
         navbar.style.backgroundColor = '#b33b51';
      } else {
         navbar.style.backgroundColor = 'transparent';
      }
   });
});