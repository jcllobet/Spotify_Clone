function footer(elementId) {
    const template = `
    <div class="current-song">
            <div>
                <img src="/assets/images/global/Bildschirmfoto_2022-03-28_um_13.42.07.png" alt=""
                    class="player-song-picture">
            </div>
            <div>
                <div class="artist">
                    <h5 class="player-song-name">Current Song</h5>
                    <span class="player-song-artist">Artist</span>
                </div>
                <div class="actions">
                    <a href="#" class="music-like-btn d-flex">
                        <i class="bi bi-heart fa"></i>
                    </a>

                    <a href="#" class="d-flex">
                        <i class="bi bi-x-lg fa"></i>
                    </a>

                    <a href="#" class="d-flex">
                        <i class="bi bi-pip fa"></i>
                    </a>

                </div>

            </div>
        </div>

        <audio class="audio-play" src="
        /music/surprise.mp3">
        </audio>

        <div class="player-controls">
            <div class="player-controls_buttons">
                <a href="#" class="music-shuffle-btn">
                    <i class="bi bi-shuffle fa"></i>
                </a>

                <a href="#" class="music-prev-btn">
                    <i class="bi bi-skip-start-fill fa-lg"></i>
                </a>

                <a href="#" class="music-play-btn">
                    <i class="bi bi-play-fill fa-2x"></i>
                    <!-- <span class="circular-white-bg">Mec</span> -->
                </a>
                <a href="#" class="music-pause-btn">
                    <i class="bi bi-pause-fill fa-2x"></i>
                    <!-- <span class="circular-white-bg">Mec</span> -->
                </a>

                <a href="#" class="music-next-btn">
                    <i class="bi bi-skip-end-fill fa-lg"></i>
                </a>

                <a href="#" class="music-repeat-btn">
                    <i class="bi bi-arrow-repeat fa-lg"></i>
                </a>

            </div>
            <div class="progress-container">
                <span class="player-song-seconds">0:00</span>
                <div class="progress-background">
                    <!-- https://getbootstrap.com/docs/4.0/components/progress/ -->
                    <div class="progress-bar" id="song-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0"
                        aria-valuemax="100"></div>
                </div>
                <span>3:00</span>
            </div>
        </div>

        </div>
        <div class="volume-controls mx-2">
            <a href="#" class="d-flex">
                <i class="bi bi-mic fa"></i>
            </a>

            <a href="#" class="d-flex">
                <i class="bi bi-view-list fa"></i>
            </a>

            <a href="#" class="d-flex">
                <i class="bi bi-laptop fa"></i>
            </a>

            <a href="#" class="d-flex">
                <i class="bi bi-volume-up fa"></i>
            </a>


            <div class="volume-progress-container">
                <div class="progress-background mx-1">
                    <!-- https://getbootstrap.com/docs/4.0/components/progress/ -->
                    <div class="progress-bar" id="volume-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0"
                        aria-valuemax="100"></div>
                </div>
            </div>
            <i class="bi bi-arrows-angle-expand fa"></i>
        </div>
    `;
    // Add HTML template HERE

    const selected = document.getElementById(elementId);
    selected.innerHTML = template;
}

export { footer };
