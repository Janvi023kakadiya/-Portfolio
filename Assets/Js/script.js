// typed cr//
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('.typed.cr', {
        strings: ["Janvi","Developer","Coder"],
        typeSpeed: 60,
        backSpeed: 50,
        loop: true
    });
});
// sticky-note//
$(window).scroll(function(){

    if($(this).scrollTop()>50){
        $('.navbar').addClass('fixed');
    }else{
        $('.navbar').removeClass('fixed');
    }
});

// skil section //
$(document).ready(function() {
    $('.skills-box-main').hover(
        function() {
            $(this).find('p').css('color', '#000');
            $(this).find('img').css('filter', 'grayscale(0)');
        },
        function() {
            $(this).find('p').css('color', '#909090');
            $(this).find('img').css('filter', 'grayscale(1)');
        }
    );
});
$(document).ready(function() {
    $('.skills-box-main').css({
        'animation': 'rotateInLeft 1s ease-out forwards'
    });
});

// Contact section//
$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
      event.preventDefault();
      // Simple validation for demonstration
      var isValid = true;
      $('#contactForm input, #contactForm textarea').each(function() {
        if ($(this).val() === '') {
          isValid = false;
          $(this).addClass('is-invalid');
        } else {
          $(this).removeClass('is-invalid');
        }
      });

      if (isValid) {
        alert('Form submitted successfully!');
        // Perform actual form submission here, e.g., via AJAX
      } else {
        alert('Please fill out all fields.');
      }
    });
  });

  //slider

var swiper = new Swiper(".mySwiper", {
      
      slidesPerView: 3,
      loop : true ,
      spaceBetween: 30,
      centeredSlides: false,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        650:{
          slidesPerView: 2,
          spaceBetween:20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });