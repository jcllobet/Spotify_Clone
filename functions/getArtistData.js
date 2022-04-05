const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getArtistData = (artistName) => {
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key": process.env.RAPID_KEY,
        },
    };

    fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/search?q=${artistName}`,
        options
    )
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
};

getArtistData("eminem");

module.exports = { getArtistData };
