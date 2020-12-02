
$(document).ready(function () {
  const cookieContainer = document.querySelector('.cookie-container');
  const cookieButton = document.querySelector('.cookie-button');


    cookieButton.addEventListener('click', ()=> {
      cookieContainer.classList.remove('active');
      localStorage.setItem('cookieBannerDisplay', 'true')
    })


  setTimeout(() => {
    if(!localStorage.getItem('cookieBannerDisplay')) {
      cookieContainer.classList.add('active')
    }
  }, 2000);

});



