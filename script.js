document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('orbit-icon')) {
      e.preventDefault();
    }
  });

  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const sectionId = this.getAttribute('href').substring(1);
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
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_-[]{}/?+=!$~";
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

      setInterval(glitchText, 3000); // how often the glitch text appears
    });
  }

  function typewriterEffect(elementIds, typingSpeed = 100, resetDelay = 2000) {
    elementIds.forEach(elementId => {
      const element = document.getElementById(elementId);
      if (element) {
        const text = element.textContent;
        element.textContent = '';
        let index = 0;

        function type() {
          if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
          } else {
            setTimeout(() => {
              element.textContent = '';
              index = 0;
              setTimeout(type, typingSpeed);
            }, resetDelay);
          }
        }

        type();
      }
    });
  }
  applyGlitchEffect(['home-title', 'social-title', 'about-title']);

  typewriterEffect(['sub-home-title', 'sub-social-title', 'sub-about-title']);

  typewriterEffect(['about-content'], 50, 10000);
});