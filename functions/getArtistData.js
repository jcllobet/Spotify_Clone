const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.RAPID_KEY,
    },
};

async function getArtistData(artistName) {
    const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`
    );
    const formattedResponse = await response.json();
    //console.log(formattedResponse);
    const dataArr = await formattedResponse["data"];
    console.log(dataArr[0]);
}

getArtistData("eminem");

module.exports = { getArtistData };
