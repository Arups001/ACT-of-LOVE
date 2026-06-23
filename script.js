const music = document.getElementById("bgMusic");

window.addEventListener("load", () => {

    music.volume = 0.6;

    const playPromise = music.play();

    if (playPromise !== undefined) {

        playPromise.catch(() => {

            document.body.addEventListener(
                "click",
                () => {
                    music.play();
                },
                { once: true }
            );

        });

    }
});


// Fade animation

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".card, .gallery img, .letter, .contact-box")
.forEach(el => observer.observe(el));
