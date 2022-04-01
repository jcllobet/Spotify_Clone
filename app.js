// Its function is to initialize other components / js functions

import { footer } from "./components/footer.js";
import { sidenav } from "./components/sidenav.js";

// global variables
let playButton = document.querySelector(".music-play-btn");
let pauseButton = document.querySelector(".music-pause-btn");
let audioElement = document.querySelector(".audio-play");
let button = document.getElementById("logInButton");

const checkIfValid = (event) => {
    event.preventDefault();
    console.log("clicked");
    let password = document.getElementById("inputPassword3");
    let email = document.getElementById("inputEmail3");

    console.log(password.value);
    console.log(email.value);

    if (password.value === "1" && email.value === "admin@gmail.com") {
        location.href = "/index.html";
        return true;
    } else {
        return alert("Wrong email or password try again.");
    }
};

// Add a listener to the Login button
const addLoginListener = () => {
    button.addEventListener("click", checkIfValid);
    console.log("added Login");
};

const addPlayListener = () => {
    // console.log(playButton);
    playButton.addEventListener("click", handlePlayButton);
};

const addPauseListener = () => {
    // console.log(pauseButton);
    pauseButton.addEventListener("click", handlePlayButton);
    pauseButton.style.display = "none";
};

function handlePlayButton() {
    // console.log(audioElement);

    if (audioElement.paused) {
        playAudio();
        pauseButton.style.display = "block";
        playButton.style.display = "none";
    } else {
        audioElement.pause();
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }
}

async function playAudio() {
    try {
        await audioElement.play();
        //playButton.classList.remove("bi bi-play-circle-fill");
    } catch (err) {
        //playButton.classList.remove("bi bi-play-circle-fill");
    }
}

//----------------------------------------------------------------------------------------------------------------------

// Check when dom has finished loading
window.onload = function () {
    let path = window.location.pathname;
    console.log(path);
    if (path.match("/pages/login.html") || path.match("/pages/register.html")) {
        button = document.getElementById("logInButton");
        addLoginListener();
    } else {
        console.log("we are not in login");
        //render sidenav & footer
        sidenav("sidenav"); // We can add routes, currentRoute if needed
        footer("footer"); // We can add routes, currentRoute if needed

        //reloading buttons
        playButton = document.querySelector(".music-play-btn");
        pauseButton = document.querySelector(".music-pause-btn");
        audioElement = document.querySelector(".audio-play");

        //adding listeners
        addPlayListener();
        addPauseListener();
    }
};
