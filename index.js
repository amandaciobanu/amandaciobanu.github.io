
const updateNavbarState = (navbar) => {
  if (window.scrollY) {
    navbar.classList.add('navbar-pink');
  } else {
    navbar.classList.remove('navbar-pink');
  }
}

$(document).ready(function () {

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
});
