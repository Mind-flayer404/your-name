// --- AUDIO CONTROL ---
const audio = document.createElement("AUDIO");
document.body.appendChild(audio);
audio.src = "src/song.mp3";
audio.loop = true; // Loop the audio automatically

const audioBtn = document.getElementById("audio-toggle");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");

let isPlaying = false;

audioBtn.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playIcon.classList.remove("hidden");
        pauseIcon.classList.add("hidden");
    } else {
        audio.play();
        playIcon.classList.add("hidden");
        pauseIcon.classList.remove("hidden");
    }
    isPlaying = !isPlaying;
});

// --- DYNAMIC STARS GENERATION ---
const starsContainer = document.getElementById('stars-container');
const NUM_STARS = 150;

for (let i = 0; i < NUM_STARS; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Randomize position
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // Randomize size
    const size = Math.random() * 2 + 1; // 1px to 3px
    
    // Randomize twinkling animation duration and delay
    const duration = Math.random() * 3 + 2; // 2s to 5s
    const delay = Math.random() * 3;
    
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;
    
    starsContainer.appendChild(star);
}

// --- DYNAMIC COMETS GENERATION ---
const cometsContainer = document.getElementById('comets-container');
const NUM_COMETS = 8; // Reducing count for a premium, less cluttered look

for (let i = 0; i < NUM_COMETS; i++) {
    const comet = document.createElement('div');
    comet.classList.add('comet');
    
    // Since angle is -45deg, they move bottom-left. We start them top-right mostly.
    const startX = Math.random() * 100 + 20; // 20% to 120%
    const startY = Math.random() * -50; // Above screen
    
    // Variable length and thickness for parallax effect
    const length = Math.random() * 150 + 150; // 150px to 300px
    const thickness = Math.random() * 1.5 + 1; // 1px to 2.5px
    
    // Speed and delay
    const duration = Math.random() * 2 + 2; // 2s to 4s
    const delay = Math.random() * 5; // Staggered start up to 5s
    
    comet.style.left = `${startX}%`;
    comet.style.top = `${startY}%`;
    comet.style.width = `${length}px`;
    comet.style.height = `${thickness}px`;
    comet.style.animationDuration = `${duration}s`;
    comet.style.animationDelay = `${delay}s`;
    
    cometsContainer.appendChild(comet);
}
