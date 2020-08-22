
const updateNavbarState = (navbar) => {
  if (window.scrollY) {
    navbar.classList.add('navbar-pink');
  } else {
    navbar.classList.remove('navbar-pink');
  }
}

const registerSmoothClick = (target) => {
  const link = $(`#link-${target}-target`);
  const destination = document.querySelector(`#${target}-target`);
  const navbarRef = $('.navbar-collapse');

  link.click(() => {
    destination.scrollIntoView({ behavior: 'smooth' })
    navbarRef.collapse('hide');

    return false;
  });
}

$(document).ready(function () {

  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    cursorChar: '\u2591'
  });

  var lang = {
    "html": "80%",
    "css": "75%",
    "javascript": "60%",
    "php": "55%",
    "angular": "50%",
    "boostrap": "55%",
    "github": "65%",
  };
  
  var multiply = 4;
  
  $.each( lang, function( language, pourcent) {
  
    var delay = 700;
    
    setTimeout(function() {
      $('#'+language+'-pourcent').html(pourcent);
    },delay*multiply);
    
    multiply++;
  
  });

	$(".card")
		.delay(1800)
		.queue(function (next) {
			$(this).removeClass("hover");
			$("a.hover").removeClass("hover");
			next();
    });
    
    const navbar = document.querySelector('#navbar-core');
    window.addEventListener('scroll', () => updateNavbarState(navbar));
    updateNavbarState(navbar);

    // Register Navbar Events
    registerSmoothClick('portfolio');
    registerSmoothClick('about');
    registerSmoothClick('skills');

    AOS.init();

});
