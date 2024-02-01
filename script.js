// JavaScript to create animation
window.onload = function() {
    var musicVideo = document.getElementById('music-video');
    musicVideo.style.opacity = '0';

    // Fade in animation
    var fadeInInterval = setInterval(function() {
        if (parseFloat(musicVideo.style.opacity) < 1) {
            musicVideo.style.opacity = (parseFloat(musicVideo.style.opacity) + 0.1).toString();
        } else {
            clearInterval(fadeInInterval);
        }
    }, 100);
};
