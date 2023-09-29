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

  function applyGlitchEffect(elementIds) {
    elementIds.forEach(elementId => {
      const element = document.getElementById(elementId);
      const originalText = element.textContent;
      let isGlitching = false;
    
      function randomChar() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()";
        return chars[Math.floor(Math.random() * chars.length)];
      }
    
      function glitchText() {
        if (isGlitching) return;
        isGlitching = true;
    
        let glitchedText = "";
        for (let i = 0; i < originalText.length; i++) {
          glitchedText += randomChar();
        }
    
        element.textContent = glitchedText;
    
        setTimeout(() => {
          element.textContent = originalText;
          isGlitching = false;
        }, 100); // how long the glitch text appears for
      }
    
      setInterval(glitchText, 1500); // how often the glitch text appears
    });
  }

  //pass any number of text elements as an array
  applyGlitchEffect(["home-title", "social-title", "about-title"]);
});