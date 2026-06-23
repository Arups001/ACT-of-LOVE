const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

// Function to safely attempt playing audio
function playAudio() {
    music.play().then(() => {
        btn.innerHTML = "🎵"; // Set icon to playing state
        removeInteractionListeners(); // Clean up listeners once music starts
    }).catch((error) => {
        console.log("Autoplay blocked by browser. Waiting for user interaction...");
    });
}

// Function to clear global event listeners once music starts playing
function removeInteractionListeners() {
    document.removeEventListener("click", playAudio);
    document.removeEventListener("touchstart", playAudio);
    document.removeEventListener("scroll", playAudio);
    document.removeEventListener("keydown", playAudio);
}

// 1. Try playing immediately when the window loads
window.addEventListener("load", () => {
    playAudio();
    
    // 2. Fallback: If blocked, trigger play immediately on ANY initial user movement/touch
    document.addEventListener("click", playAudio);
    document.addEventListener("touchstart", playAudio); // For mobile taps
    document.addEventListener("scroll", playAudio);     // For mobile scrolling
    document.addEventListener("keydown", playAudio);    // For keyboard keys
});

// 3. Manual Toggle Button Control
btn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevents conflict with global click listeners
    if (music.paused) {
        music.play();
        btn.innerHTML = "🎵";
    } else {
        music.pause();
        btn.innerHTML = "🔇";
    }
});
