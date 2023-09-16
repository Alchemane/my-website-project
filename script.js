document.addEventListener("DOMContentLoaded", function() {
    const numberOfIcons = 11;
    const radius = 200;
    const angleStep = 360 / numberOfIcons;

    const iconIds = [
        "discord-icon", "steam-icon", "instagram-icon", "reddit-icon",
        "twitter-icon", "github-icon", "youtube-icon", "anime-planet-icon",
        "tiktok-icon", "spotify-icon", "soundcloud-icon"
    ];
    
    iconIds.forEach((id, i) => {
        const icon = document.getElementById(id);
        const angle = angleStep * i;
        const x = radius * Math.cos(angle * (Math.PI / 180));
        const y = radius * Math.sin(angle * (Math.PI / 180));
        
        icon.style.left = `calc(50% + ${x}px)`;
        icon.style.top = `calc(50% + ${y}px)`;
        icon.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;
    });
});