document.addEventListener("DOMContentLoaded", function() {
    const numberOfIcons = 11;
    const radius = 200;
    const angleStep = 360 / numberOfIcons;

    const iconIds = [
        "discord-icon", "steam-icon", "instagram-icon", "reddit-icon",
        "twitter-icon", "github-icon", "youtube-icon", "anime-planet-icon",
        "tiktok-icon", "spotify-icon", "soundcloud-icon"
    ];

    const profilePic = document.getElementById("profile-pic");
    const profilePicRect = profilePic.getBoundingClientRect();
    const profilePicCenterX = profilePicRect.left + profilePicRect.width / 2;
    const profilePicCenterY = profilePicRect.top + profilePicRect.height / 2;

    console.log(`Profile Picture Center: ${profilePicCenterX}px, ${profilePicCenterY}px`);

    
    iconIds.forEach((id, i) => {
        const icon = document.getElementById(id);
        const iconRect = icon.getBoundingClientRect();
        const iconCenterX = iconRect.left + iconRect.width / 2;
        const iconCenterY = iconRect.top + iconRect.height / 2;

        console.log(`Initial ${id} Center: ${iconCenterX}px, ${iconCenterY}px`);


        const transformOriginX = profilePicCenterX - iconCenterX;
        const transformOriginY = profilePicCenterY - iconCenterY;

        icon.style.transformOrigin = `${transformOriginX}px ${transformOriginY}px`;

        console.log(`Setting transform-origin for ${id} to ${transformOriginX}px ${transformOriginY}px`);

        const angle = angleStep * i;
        const x = radius * Math.cos(angle * (Math.PI / 180));
        const y = radius * Math.sin(angle * (Math.PI / 180));

        icon.style.left = `calc(50% + ${x}px)`;
        icon.style.top = `calc(50% + ${y}px)`;
        icon.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;
        console.log(`Applied transform-origin for ${id}: ${window.getComputedStyle(icon).transformOrigin}`);
    });
});