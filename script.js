document.addEventListener("DOMContentLoaded", function() {
    const numberOfIcons = 1;
    const radius = 200;
    const angleStep = 360 / numberOfIcons;

    const iconIds = [
        "soundcloud-icon"
    ];

    const profilePicture = document.getElementById('profile-picture');
    const profileRect = profilePicture.getBoundingClientRect();
    const centerX = profileRect.left + profileRect.width / 2;
    const centerY = profileRect.top + profileRect.height / 2;
    
    iconIds.forEach((id, i) => {
        const icon = document.getElementById(id);
        const angle = angleStep * i;
        const x = radius * Math.cos(angle * (Math.PI / 180));
        const y = radius * Math.sin(angle * (Math.PI / 180));

        icon.style.transformOrigin = `${centerX}px ${centerY}px`;
        
        icon.style.left = `calc(50% + ${x}px)`;
        icon.style.top = `calc(50% + ${y}px)`;
        icon.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;
    });
});