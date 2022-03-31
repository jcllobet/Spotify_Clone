function sidenav(elementId) {
    // if the URL contains 'pages':
    const template = `
    <img src="/assets/images/sidebar/nav_logo.png" alt="spotify logo" class="nav-logo" />
    <ul class='list-group'>
        <li class="list-group-item list-group-item-action active">
            <a href="/index.html" class="d-flex">
                <i class="bi bi-house-door-fill fa-2x"> </i>
                <span class=" justify-content-center text-center mx-3 my-auto">
                    Home
                </span>
            </a>
        </li>
        <li class="list-group-item list-group-item-action">
            <a href="/index.html" class="d-flex">
                <i class="bi bi-search fa-2x"> </i>
                <span class=" justify-content-center text-center mx-3 my-auto">
                    Search
                </span>
            </a>
        </li>
        <li class="list-group-item list-group-item-action">
            <a href="/index.html" class="d-flex">
                <i class="bi bi-music-note-list fa-2x"> </i>
                <span class=" justify-content-center text-center mx-3 my-auto">
                    Your Library
                </span>
            </a>
        </li>
        <li class="list-group-item list-group-item-action mt-4">
            <a href="/index.html" class="d-flex">
                <i class="bi bi-plus-square-fill fa-2x"> </i>
                <span class=" justify-content-center text-center mx-3 my-auto">
                    Create Playlist
                </span>
            </a>
        </li>
        <li class="list-group-item list-group-item-action">
            <a href="/index.html" class="d-flex">
                <i class="bi bi-suit-heart-fill fa-2x heart"> </i>
                <span class=" justify-content-center text-center mx-3 my-auto">
                    Liked Songs
                </span>
            </a>
        </li>
        <hr/ >
        <li>
            <div class="song-scroller">
                <ol>
                    <li>Funky Heavy Bluesy</li>
                    <li>Your Top Songs 2020</li>
                    <li>In Love with you</li>
                    <li>This is Rod Stewart</li>
                    <li>Franchise ft. Young Thug</li>
                    <li>Your Top Songs 2019</li>
                    <li>Palleggio</li>
                    <li>This is Joe Bonamassa</li>
                    <li>Jun19</li>
                    <li>Jack 30th Party 2</li>
                    <li>Jack 30th Party</li>
                    <li>This is Opeth</li>
                    <li>Metal Ballads</li>
                    <li>New Playlist</li>
                    <li>Your Top Songs 2019</li>
                    <li>Legends Never Die</li>
                    <li>Lofi Coders</li>
                    <li>Coding Mode</li>
                    <li>invisible cloud 2022</li>
                    <li>Chill Lofi Study Beats</li>
                </ol>
            </div>
        </li>

        <li class="list-group-item list-group-item-action">
            <a href="/index.html" class="d-flex" >
                <i class="bi bi-box-arrow-down fa-2x install"> </i>
                <span class=" justify-content-center text-center mx-3 my-auto install">
                    Install App
                </span>
            </a>
        </li>
    </ul>
    `;
    // Add HTML template above

    const selected = document.getElementById(elementId);
    selected.innerHTML = template;
}

export { sidenav };
