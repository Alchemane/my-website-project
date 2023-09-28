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

    //glitch animation
  const homeTitle = document.getElementById("home-title");
  const originalText = homeTitle.textContent;
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

    homeTitle.textContent = glitchedText;

    setTimeout(() => {
      homeTitle.textContent = originalText;
      isGlitching = false;
    }, 100);
  }

  setInterval(glitchText, 3000);
});