import axios from "axios";

const apiKey = import.meta.env.VITE_APIKEY;
const baseurl = import.meta.env.VITE_BASEURL;

export const getMovieList = async () => {
    try {
        console.log(`${baseurl}/movie/popular?page=1api_key=${apiKey}`);
        const movie = await axios.get(`${baseurl}/movie/popular?api_key=${apiKey}`);
        return movie.data.results
    } catch (error) {
        console.error("Error fetching movie list:", error);
    }
};


export const seacrhMovie = async (q) => {
    const search = await axios.get(`${baseurl}/search/movie?query=${q}&api_key=${apiKey}`);
    return search.data 
    
}