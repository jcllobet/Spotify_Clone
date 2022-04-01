// Its function is to initialize other components / js functions

import { footer } from "./components/footer.js";
import { sidenav } from "./components/sidenav.js";

const EMPTY = "not initialized";

// initializing global variables

let USER_STATUS = {
    isLoggedIn: false,
    isAdmin: false,
    likedSongs: [],
};

// footer
let playButton = EMPTY;
let pauseButton = EMPTY;
let nextButton = EMPTY;
let prevButton = EMPTY;
let shuffleButton = EMPTY;
let repeatButton = EMPTY;
let likeButton = EMPTY;
let audioElement = EMPTY;

//login
let loginButton = EMPTY;

//----------------------------------------------------------------------------------------------------------------------

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

//----------------------------------------------------------------------------------------------------------------------

// Add a generic listener to button with action

// const addListener = (btn, action, CallbackFunct) => {
//     btn.addEventListener(action, CallbackFunct);
//     console.log(
//         `Added Listener to ${btn} on ${action} with function ${CallbackFunct}`
//     );
// };

const addPrevListener = () => {
    prevButton.addEventListener("click", handlePlayButton);
    console.log(
        `Added Listener to prevButton on click with function ${changeSong}`
    );
};

const addLoginListener = () => {
    loginButton.addEventListener("click", checkIfValid);
    console.log(
        `Added Listener to loginButton on click with function ${checkIfValid}`
    );
};

const addPlayListener = () => {
    // console.log(playButton);
    playButton.addEventListener("click", handlePlayButton);
    console.log(
        `Added Listener to playButton on click with function ${handlePlayButton}`
    );
};

const addPauseListener = () => {
    // console.log(pauseButton);
    pauseButton.addEventListener("click", handlePlayButton);
    pauseButton.style.display = "none";
    console.log(
        `Added Listener to pauseButton on click with function ${handlePlayButton}`
    );
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

function changeSong() {
    console.log(event.target);
    if (event.target === prevButton) {
        console.log("prev");
    } else if (e.target === nextButton) {
        console.log("next");
    } else {
        console.log("shuffle");
    }
}

const saveSong = () => {
    USER_STATUS.likedSongs.push(audioElement.src);
};

const logSong = () => {
    console.log(audioElement.src);
};
//----------------------------------------------------------------------------------------------------------------------

// Check when dom has finished loading
window.onload = function () {
    let path = window.location.pathname;
    console.log(path);

    if (path.match("/pages/login.html") || path.match("/pages/register.html")) {
        //reloading button
        loginButton = document.getElementById("logInButton");

        //adding listeners
        addLoginListener();
    } else {
        console.log("we are not in login");

        //render sidenav & footer
        sidenav("sidenav"); // We can add routes, currentRoute if needed
        footer("footer"); // We can add routes, currentRoute if needed

        //reload the buttons and add listener
        playButton = document.querySelector(".music-play-btn");
        pauseButton = document.querySelector(".music-pause-btn");
        prevButton = document.querySelector(".music-prev-btn");
        nextButton = document.querySelector(".music-next-btn");
        shuffleButton = document.querySelector(".music-shuffle-btn");
        repeatButton = document.querySelector(".music-repeat-btn");
        likeButton = document.querySelector(".music-like-btn");
        audioElement = document.querySelector("audio");

        console.log(document.querySelector(".music-prev-btn"));

        // if any query failed, log it
        if (playButton === EMPTY) {
            console.log("playButton is empty");
        }
        if (pauseButton === EMPTY) {
            console.log("pauseButton is empty");
        }
        if (nextButton === EMPTY) {
            console.log("nextButton is empty");
        }
        if (prevButton === EMPTY) {
            console.log("prevButton is empty");
        }
        if (shuffleButton === EMPTY) {
            console.log("shuffleButton is empty");
        }
        if (repeatButton === EMPTY) {
            console.log("repeatButton is empty");
        }
        if (likeButton === EMPTY) {
            console.log("likeButton is empty");
        }
        if (audioElement === EMPTY) {
            console.log("audioElement is empty");
        }

        console.log(prevButton);

        //add the listeners one by one
        addPauseListener();
        addPlayListener();
        addPrevListener();
        // addListener(prevButton, "onclick", changeSong);
        // addListener(shuffleButton, "onclick", changeSong);
        // addListener(repeatButton, "onclick", changeSong);
        // addListener(likeButton, "onclick", saveSong);
    }
};

// let loginButtonsObj = {
//     loginButton: [
//         ("query", "logInButton"),
//         ("action", "clicked"),
//         ("CallbackFunct", checkIfValid),
//     ],
// };

// let homeObj = {
//     playButton: [
//         ("query", "playButton"),
//         ("action", "clicked"),
//         ("CallbackFunct", handlePlayButton),
//     ],
//     pauseButton: [
//         ("query", "pauseButton"),
//         ("action", "clicked"),
//         ("CallbackFunct", handlePlayButton),
//     ],
//     nextButton: [
//         ("query", "nextButton"),
//         ("action", "clicked"),
//         ("CallbackFunct", changeSong),
//     ],
//     prevButton: [
//         ("query", "prevButton"),
//         ("action", "clicked"),
//         ("CallbackFunct", changeSong),
//     ],
//     shuffleButton: [
//         ("query", "shuffleButton"),
//         ("action", "clicked"),
//         ("CallbackFunct", changeSong),
//     ],
//     repeatButton: [
//         ("query", "repeatButton"),
//         ("action", "clicked"),
//         ("CallbackFunct", changeSong),
//     ],
//     likeButton: [
//         ("query", "likeButton"),
//         ("action", "clicked"),
//         ("CallbackFunct", saveSong),
//     ],
//     audioElement: [
//         ("query", "audioElement"),
//         ("action", "ended"),
//         ("CallbackFunct", changeSong),
//     ],
// };
