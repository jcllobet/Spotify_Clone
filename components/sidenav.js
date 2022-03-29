function sidenav(elementId) {
    // if the URL contains 'pages':
    const template = `
    <img src="/assets/images/sidebar/nav_logo.png" alt="spotify logo" class="nav-logo" />
    <ul class='list-group'>
        <li class="list-group-item list-group-item-action active">
            <a href="/index.html" class="d-flex">
                <i class="bi bi-house-door-fill fa-2x"> </i>
                <span class=" justify-content-center text-center mx-3 my-auto font-weight-bold">
                    Home
                </span>
            </a>
        </li>
        <li class="list-group-item list-group-item-action">
            <a href="/index.html" class="d-flex">
                <i class="bi bi-search fa-2x"> </i>
                <span class=" justify-content-center text-center mx-3 my-auto font-weight-bold">
                    Search
                </span>
            </a>
        </li>
        <li class="list-group-item list-group-item-action">
            <a href="/index.html" class="d-flex">
                <i class="bi bi-music-note-list fa-2x"> </i>
                <span class=" justify-content-center text-center mx-3 my-auto font-weight-bold">
                    Your Library
                </span>
            </a>
        </li>
        <li class="list-group-item list-group-item-action">
            <a href="/index.html" class="d-flex">
                <i class="bi bi-plus-square-fill fa-2x"> </i>
                <span class=" justify-content-center text-center mx-3 my-auto font-weight-bold">
                    Create Playlist
                </span>
            </a>
        </li>
        <li class="list-group-item list-group-item-action">
            <a href="/index.html" class="d-flex">
                <i class="bi bi-suit-heart-fill fa-2x"> </i>
                <span class=" justify-content-center text-center mx-3 my-auto font-weight-bold">
                    Liked Songs
                </span>
            </a>
        </li>
        <hr />
        <li>
            <div class="song-scroller">
                <ol>
                    <li>Song1</li>
                    <li>Song2</li>
                    <li>Song3</li>
                    <li>Song4</li>
                    <li>Song5</li>
                    <li>Song6</li>
                    <li>Song7</li>
                    <li>Song8</li>
                    <li>Song9</li>
                    <li>Song10</li>
                    <li>Song11</li>
                    <li>Song12</li>
                    <li>Song13</li>
                    <li>Song14</li>
                    <li>Song15</li>
                    <li>Song16</li>
                    <li>Song17</li>
                    <li>Song18</li>
                    <li>Song19</li>
                    <li>Song20</li>
                </ol>
            </div>
        </li>

        <li class="list-group-item list-group-item-action">
            <a href="/index.html" class="d-flex">
                <i class="bi bi-box-arrow-down fa-2x"> </i>
                <span class=" justify-content-center text-center mx-3 my-auto font-weight-bold">
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
