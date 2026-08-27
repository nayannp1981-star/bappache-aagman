/* =========================
   ENTER WEBSITE
========================= */

function enterWebsite() {

    const welcomeScreen =
        document.getElementById("welcomeScreen");

    const music =
        document.getElementById("bgMusic");

    welcomeScreen.style.opacity = "0";

    welcomeScreen.style.transition =
        "opacity 1s ease";

    setTimeout(() => {

        welcomeScreen.style.display = "none";

    }, 1000);


    // Try to start music
    music.play()
        .then(() => {

            document.getElementById("musicBtn")
                .innerHTML = "??";

        })
        .catch(() => {

            console.log("Music could not autoplay.");

        });

}


/* =========================
   MUSIC CONTROL
========================= */

function toggleMusic() {

    const music =
        document.getElementById("bgMusic");

    const button =
        document.getElementById("musicBtn");


    if (music.paused) {

        music.play();

        button.innerHTML = "??";

    } else {

        music.pause();

        button.innerHTML = "??";

    }

}


/* =========================
   COUNTDOWN
========================= */

/*
   ??? ??????? Bappa arrival ??
   date ??? time ????.

   Example:
   August 27, 2026 10:00:00
*/

const arrivalDate =
    new Date("August 27, 2026 10:00:00").getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        arrivalDate - now;


    if (difference <= 0) {

        document.getElementById("days")
            .innerText = "00";

        document.getElementById("hours")
            .innerText = "00";

        document.getElementById("minutes")
            .innerText = "00";

        document.getElementById("seconds")
            .innerText = "00";

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
                (1000 * 60)) /
            1000
        );


    document.getElementById("days")
        .innerText = String(days).padStart(2, "0");

    document.getElementById("hours")
        .innerText = String(hours).padStart(2, "0");

    document.getElementById("minutes")
        .innerText = String(minutes).padStart(2, "0");

    document.getElementById("seconds")
        .innerText = String(seconds).padStart(2, "0");

}


setInterval(updateCountdown, 1000);

updateCountdown();