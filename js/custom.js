$(document).ready(function(){
    $(window).scroll(function() {
      var sticky = $('header');
      var nav = $('.navbar');
        scroll = $(window).scrollTop();
       
      if (scroll >= 40) { 
        sticky.addClass('fixed'); 
        nav.removeClass('bg-transparent')
      }
      else { 
       sticky.removeClass('fixed');
       nav.addClass('bg-transparent')
    }
    });
  
    $(function () {
      AOS.init();
    });
    document.querySelectorAll('.scroll-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // prevent default jump
        const targetId = this.getAttribute('href').slice(1); // remove '#'
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  })