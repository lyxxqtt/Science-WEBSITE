window.onscroll = function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {  
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };


  document.getElementById('hamburger').addEventListener('click', function() {
    const toggle = document.getElementById('nav-toggle');
    toggle.checked = !toggle.checked; // Toggle the checkbox state
  });