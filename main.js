// main.js

document.addEventListener("DOMContentLoaded", function() {
    // Function to swap columns after a delay
    function swapColumns() {
        var container = document.querySelector(".who-we-are");
        container.classList.toggle("swap-columns");

        // Optionally reveal hidden text after swapping columns
        var revealText = document.getElementById("reveal-text");
        revealText.classList.toggle("hidden");
    }

       // Call swapColumns initially
       swapColumns();

       // Swap columns every 5 seconds
       setInterval(swapColumns, 8000); // Repeat every 5000 milliseconds (5 secon
});


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('navbar');
    if(window.scroll > 50){
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeControl = document.getElementById('volumeControl');

// Toggle play/pause on button click
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
});

// Update video volume based on range input
volumeControl.addEventListener('input', (event) => {
    video.volume = event.target.value;
});

// Automatically update play/pause button text
video.addEventListener('play', () => {
    playPauseBtn.textContent = 'Pause';
});
video.addEventListener('pause', () => {
    playPauseBtn.textContent = 'Play';
});






