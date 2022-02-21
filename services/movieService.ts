import axios from "axios";
import { MoviesType, MovieDetails, Credits, Gallery, SearchResults } from "../types/types";
class MovieService {
  url: string = `https://api.themoviedb.org/3/movie/category?api_key=c46e93100eb64667d419552d00b518d6&language=en-US&page=pageNumber`;
  newUrl: string = `https://reverse-proxy-movie-app.herokuapp.com/movies/category/pageNumber`;
  base:string=`https://reverse-proxy-movie-app.herokuapp.com/`;
  async getMovieByCatAndPage(category: string, pageNumber: number) {
    const actualReq = this.url
      .replace("category", category)
      .replace("pageNumber", pageNumber.toString());
    const response = await axios.get<MoviesType>(actualReq);
    return response.data.results;
  }
  async getMovieById(id: string) {
    const response = await axios.get<MovieDetails>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c46e93100eb64667d419552d00b518d6&language=en-US`
    );
    return response.data;
  }
  async getCredits(id: string) {
    const response = await axios.get<Credits>(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c46e93100eb64667d419552d00b518d6&language=en-US`
    );
    return response.data;
  }
  async getMovieGallery(id: string) {
    const response = await axios.get<Gallery>(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=c46e93100eb64667d419552d00b518d6&language=null`
    );
    return response.data;
  }
  async searchByName(searchText: string) {
    const response = await axios.get<SearchResults>(
      `https://api.themoviedb.org/3/search/movie?api_key=c46e93100eb64667d419552d00b518d6&language=en-US&query=${searchText}&page=1&include_adult=false`
    );
    return response.data;
  }
}

const movieService = new MovieService();

export default movieService;
