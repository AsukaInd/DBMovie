import axios from "axios";

const baseURL = import.meta.env.VITE_BASEURL
const Apikey = import.meta.env.VITE_APIKEY

export const getMovieList = async() => {
    const movie = await axios.get(`${baseURL}/movie/popular?api_key=${Apikey}`)
    // console.log(movie.data.results)
    return movie.data.results
    
}

export const searchMovie = async(q) => {
    const search = axios.get(q)
}