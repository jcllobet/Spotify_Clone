const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.RAPID_KEY,
    },
};

fetch("https://deezerdevs-deezer.p.rapidapi.com/track/%7Bid%7D", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
