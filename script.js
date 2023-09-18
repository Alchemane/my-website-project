document.addEventListener("DOMContentLoaded", function() {
    const numberOfIcons = 1;
    const radius = 0;
    const angleStep = 360 / numberOfIcons;

    const iconIds = [
        "soundcloud-icon"
    ];

    const profilePicture = document.getElementById('profile-pic');
    const profileRect = profilePicture.getBoundingClientRect();
    const centerX = profileRect.left + window.scrollX + profileRect.width / 2;
    const centerY = profileRect.top + window.scrollY + profileRect.height / 2;

    iconIds.forEach((id, i) => {
        const icon = document.getElementById(id);
        const angle = angleStep * i;
        const x = radius * Math.cos(angle * (Math.PI / 180));
        const y = radius * Math.sin(angle * (Math.PI / 180));
        
    
        // Get the dimensions of the icon
        const iconWidth = icon.offsetWidth;
        const iconHeight = icon.offsetHeight;
    
        // Adjust the transform-origin
        const adjustedCenterX = centerX - iconWidth / 2;
        const adjustedCenterY = centerY - iconHeight / 2;
        icon.style.transformOrigin = `${adjustedCenterX}px ${adjustedCenterY}px`;
        console.log("Set transform-origin:", icon.style.transformOrigin);
        void icon.offsetHeight;

        icon.style.left = `calc(50% + ${x}px)`;
        icon.style.top = `calc(50% + ${y}px)`;
        icon.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;
        console.log("Center of profile picture:", centerX, centerY);
        console.log("Icon dimensions:", iconWidth, iconHeight);
        console.log("Adjusted transform-origin:", adjustedCenterX, adjustedCenterY);
    });
});