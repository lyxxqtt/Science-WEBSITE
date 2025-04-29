let footerVisible = false;
    
function isFooterInView() {
  const footer = document.querySelector('.footer');
  const footerPosition = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (footerPosition.top < windowHeight && footerPosition.bottom >= 0) {
    if (!footerVisible) {
      footer.classList.add('visible');
      footerVisible = true;
    }
  } else {
    if (footerVisible) {
      footer.classList.remove('visible');
      footerVisible = false;
    }
  }
}

let scrollTimeout;
window.addEventListener('scroll', function() {
  if (!scrollTimeout) {
    scrollTimeout = requestAnimationFrame(function() {
      isFooterInView();
      scrollTimeout = null;
    });
  }
});

window.addEventListener('load', isFooterInView);