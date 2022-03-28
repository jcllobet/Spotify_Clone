function sidenav(elementId) {
    const template = `
    <div id="sticky-sidebar">
        I am a sidenav

        More and more text even when it overflows
    </div>
    `;
    // Add HTML template above

    const selected = document.getElementById(elementId);
    selected.innerHTML = template;
}

export { sidenav };
