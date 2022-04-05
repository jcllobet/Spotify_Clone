// const fetch = (...args) =>
//     import("node-fetch").then(({ default: fetch }) => fetch(...args));

import axios from "../node_modules/axios/index.js";
import { updateArtistName } from "../components/renderArtistAlbums.js";

export async function fetchArtistData(artistName, dataArr) {
    const options = {
        method: "GET",
        url: "https://striveschool-api.herokuapp.com/api/deezer/search",
        params: { q: `${artistName}` },
        //headers: {
        //    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        //    "X-RapidAPI-Key": process.env.RAPID_KEY,
        //},
    };

    try {
        const response = await axios.request(options);
        console.log("✅ Status ok");
        //console.log(response);
        let data = response.data["data"];

        //console.log(data);

        updateArtistName(artistName, "artist-name");
    } catch (error) {
        console.error(error);
    }
}

//fetchArtistData("eminem");

//fetchArtistData("eminem");
