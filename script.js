window.addEventListener("load", () => {

    const music = document.getElementById("bgMusic");

    music.muted = false;

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
