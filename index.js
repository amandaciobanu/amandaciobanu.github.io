
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

  //Type Banner
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    cursorChar: '\u2591'
  });

  //Cards Portfolio
	$(".card")
		.delay(1800)
		.queue(function (next) {
			$(this).removeClass("hover");
			$("a.hover").removeClass("hover");
			next();
    });


    //Navbar Scroll
    const navbar = document.querySelector('#navbar-core');
    window.addEventListener('scroll', () => updateNavbarState(navbar));
    updateNavbarState(navbar);

    // Register Navbar Events
    registerSmoothClick('portfolio');
    registerSmoothClick('about');
    registerSmoothClick('skills');
    registerSmoothClick('contact');

    AOS.init();

    //Skills animation

    $('.skill-icons').children('.active').each(function(i) {
      var row = $(this);
      setTimeout(function() {
        row.css('background','#ef4975');
      }, 100*i);
    });

});
