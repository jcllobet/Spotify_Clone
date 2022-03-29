function footer(elementId) {
    const template = `
    <div class="current-song">
            <div>
                <img src="/assets/images/global/Bildschirmfoto_2022-03-28_um_13.42.07.png" alt="">
            </div>
            <div>
                <div>
                    <h5>Current Song</h5>
                    <span>Artist</span>
                </div>
                <i class="bi bi-heart fa"> </i>
            </div>
        </div>

        <div class="player-controls">
            <div class="player-controls_buttons">
                <i class="fas fa-step-backward"></i>
                <i class="fas fa-step-backward"></i>
                <i class="fas fa-play"></i>
                <i class="fas fa-step-forward"></i>
                <i class="fas fa-step-forward"></i>
            </div>
            <div class="progress-container">
                <span>0:00</span>
                <div class="progress" draggable=true>test</div>
                <span>3:00</span>
            </div>

        </div>
        <div class="volume-controls">
            <i class="fas fa-step-backward"></i>
            <i class="fas fa-step-backward"></i>
            <i class="fas fa-step-backward"></i>
            <div class="volume-progress-container">
                <div class="progress" draggable=true>Long</div>
            </div>
            <div class="volume">
                <div class="volumeUp">+</div>
                <div class="volumeDown">-</div>
            </div>
        </div>
    `;
    // Add HTML template HERE

    const selected = document.getElementById(elementId);
    selected.innerHTML = template;
}

export { footer };
