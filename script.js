document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('data-section');
        const sectionElement = document.getElementById(sectionId);
  
        window.scrollTo({
          top: sectionElement.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  });