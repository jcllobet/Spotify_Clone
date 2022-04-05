// Its function is to initialize other components / js functions

import { footer } from "./components/footer.js";
import { sidenav } from "./components/sidenav.js";

const EMPTY = "not initialized";

// initializing global variables

let USER_STATUS = {
    currentSong: 0,
    isLoggedIn: false,
    isAdmin: false,
    likedSongs: [],
};

let SONG_LIST = [
    {
        songName: "Mundian To Bach Ke",
        songArtist: "Panjabi MC",
        songPicture:
            "/assets/images/global/Bildschirmfoto_2022-03-28_um_13.42.07.png",
        songUrl: "/music/surprise.mp3",
    },
    {
        songName: "Dil Diya Le",
        songArtist: "Panjabi MC",
        songPicture: "/assets/images/artist/pic5.jpeg",
        songUrl: "/music/tuluktuluk.mp3",
    },
    {
        songName: "Best Vibes",
        songArtist: "Magic DJ",
        songPicture: "/assets/images/artist/pic1.jpeg",
        songUrl:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
        songName: "Oh my loving",
        songArtist: "Harry Potter",
        songPicture: "/assets//images/artist/pic2.jpeg",
        songUrl:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
        songName: "I am lost for you",
        songArtist: "Drake",
        songPicture: "/assets//images/artist/pic3.jpeg",
        songUrl:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
        songName: "Totally not fake",
        songArtist: "DJ Javascript",
        songPicture: "/assets//images/artist/pic4.jpeg",
        songUrl:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
];

// footer
let playButton = EMPTY;
let albumPlayButton = EMPTY;
let pauseButton = EMPTY;
let nextButton = EMPTY;
let prevButton = EMPTY;
let shuffleButton = EMPTY;
let repeatButton = EMPTY;
let likeButton = EMPTY;
let audioElement = EMPTY;
let songSeconds = EMPTY;
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

const addListener = (btnName, btnElement, action, CallbackFunct) => {
    btnElement.addEventListener(action, CallbackFunct);
    console.log(
        `Added Listener to ${btnName} on ${action} with function ${CallbackFunct}`
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
        startSongSeconds();
        //playButton.classList.remove("bi bi-play-circle-fill");
    } catch (err) {
        //playButton.classList.remove("bi bi-play-circle-fill");
    }
}

function prevSong(e) {
    audioElement.pause();
    if (USER_STATUS.currentSong === 0) {
        USER_STATUS.currentSong = SONG_LIST.length - 1;
    } else {
        USER_STATUS.currentSong = USER_STATUS.currentSong - 1;
    }
    changeSongDetails(SONG_LIST[USER_STATUS.currentSong], audioElement);
    audioElement.play();
}

function nextSong(e) {
    audioElement.pause();
    if (USER_STATUS.currentSong === SONG_LIST.length - 1) {
        USER_STATUS.currentSong = 0;
    } else {
        USER_STATUS.currentSong = USER_STATUS.currentSong + 1;
    }
    changeSongDetails(SONG_LIST[USER_STATUS.currentSong], audioElement);
    audioElement.play();
}

function randomSong(e) {
    audioElement.pause();
    USER_STATUS.currentSong = Math.floor(Math.random() * SONG_LIST.length);
    changeSongDetails(SONG_LIST[USER_STATUS.currentSong], audioElement);
    audioElement.play();
}

const changeSongDetails = (currentlyPlaying, audioElement) => {
    console.log(currentlyPlaying);

    let songName = currentlyPlaying.songName;
    console.log(currentlyPlaying.songName);

    let songArtist = currentlyPlaying.songArtist;
    let songPicture = currentlyPlaying.songPicture;
    let songUrl = currentlyPlaying.songUrl;

    document.querySelector(".player-song-name").innerText = songName;
    document.querySelector(".player-song-artist").innerText = songArtist;
    document.querySelector(".player-song-picture").src = songPicture;
    audioElement.src = songUrl;
};

const saveSong = () => {
    USER_STATUS.likedSongs.push(audioElement.src);
};

const logSong = () => {
    console.log(audioElement.src);
};

// check if the button is === empty
const checkIfEmpty = (btnName, btnElement) => {
    if (btnElement === EMPTY) {
        console.log(`${btnName} is empty`);
    }
};

// replaces footer song values by current status
const updateSongFooter = () => {
    let songName = document.querySelector(".player-song-name");
    let songArtist = document.querySelector(".player-song-artist");
    let songPicture = document.querySelector(".player-song-picture");

    songName.innerText = SONG_LIST[USER_STATUS.currentSong].songName;
    songArtist.innerText = SONG_LIST[USER_STATUS.currentSong].songArtist;
    songPicture.src = SONG_LIST[USER_STATUS.currentSong].songPicture;

    console.log("songs were replaced successfully");
};

// it updates the second counter
const startSongSeconds = () => {
    let songSeconds = document.querySelector(".player-song-seconds");
    setInterval(() => {
        let secondCount = Math.floor(audioElement.currentTime);
        if (secondCount < 10) {
            songSeconds.innerText = `0:0${secondCount}`;
        } else {
            songSeconds.innerText = `0:${secondCount}`;
        }
    }, 1000);
};

//----------------------------------------------------------------------------------------------------------------------

// Check when dom has finished loading
window.onload = function () {
    let path = window.location.pathname;
    console.log(path);

    console.log(SONG_LIST);

    if (path.match("/pages/login.html") || path.match("/pages/register.html")) {
        //reloading button
        loginButton = document.getElementById("logInButton");

        //adding listeners
        addListener("loginButton", loginButton, "click", checkIfValid);
    } else {
        console.log("we are not in login");

        //render sidenav & footer
        sidenav("sidenav"); // We can add routes, currentRoute if needed
        footer("footer"); // We can add routes, currentRoute if needed

        updateSongFooter();
        //replacing footer song values by current
        // refreshed buttons Arr
        let refreshedArr = [];
        //reload the buttons and add listener
        playButton = document.querySelector(".music-play-btn");
        pauseButton = document.querySelector(".music-pause-btn");
        prevButton = document.querySelector(".music-prev-btn");
        nextButton = document.querySelector(".music-next-btn");
        shuffleButton = document.querySelector(".music-shuffle-btn");
        repeatButton = document.querySelector(".music-repeat-btn");
        likeButton = document.querySelector(".music-like-btn");
        audioElement = document.querySelector("audio");

        refreshedArr.push(
            playButton,
            pauseButton,
            prevButton,
            nextButton,
            shuffleButton,
            repeatButton,
            likeButton
        );
        // check if the button is === empty using previously defined function for all elements of the array
        refreshedArr.forEach((btn) => {
            checkIfEmpty(btn.id, btn);
        });

        console.log("back to life");

        //add the special listeners
        addPauseListener();
        //add all the other listeners
        addListener("playButton", playButton, "click", handlePlayButton);

        addListener("prevButton", prevButton, "click", prevSong);
        addListener("nextButton", nextButton, "click", nextSong);
        addListener("shuffleButton", shuffleButton, "click", randomSong);
    }
};
