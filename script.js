// MUSIC

window.addEventListener("load", () => {

    const music = document.getElementById("bgMusic");

    music.volume = 0.7;

    const playPromise = music.play();

    if (playPromise !== undefined) {

        playPromise.catch(() => {

            document.body.addEventListener("click", () => {

                music.play();

            }, { once: true });

        });
    }
});


// FADE ANIMATION

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0px)";
        }

    });

});


document.querySelectorAll(".card,.gallery img,.paper").forEach(el => {

    el.style.opacity = 0;
    el.style.transform = "translateY(50px)";
    el.style.transition = "1s";

    observer.observe(el);

});
