import axios from "axios";
import { MoviesType, MovieDetails, Credits, Gallery, SearchResults } from "../types/types";
class MovieService {
  url: string = `https://api.themoviedb.org/3/movie/category?api_key=c46e93100eb64667d419552d00b518d6&language=en-US&page=pageNumber`;
  newUrl: string = `https://rev-proxy-movie.herokuapp.com/movies/category/pageNumber`;
  async getMovieByCatAndPage(category: string, pageNumber: number) {
    const actualReq = this.newUrl
      .replace("category", category)
      .replace("pageNumber", pageNumber.toString());
    const response = await axios.get<MoviesType>(actualReq);
    return response.data.results;
  }
  async getMovieById(id: string) {
    const response = await axios.get<MovieDetails>(
      `https://movie-galaxy-proxy.herokuapp.com/moviebyid/${id}`
    );
    return response.data;
  }
  async getCredits(id: string) {
    const response = await axios.get<Credits>(
      `https://movie-galaxy-proxy.herokuapp.com/getCredits/${id}`
    );
    return response.data;
  }
  async getMovieGallery(id: string) {
    const response = await axios.get<Gallery>(
      `https://movie-galaxy-proxy.herokuapp.com/getMovieGallery/${id}`
    );
    return response.data;
  }
  async searchByName(searchText: string) {
    const response = await axios.get<SearchResults>(
      `https://movie-galaxy-proxy.herokuapp.com/searchByText/${searchText}`
    );
    return response.data;
  }
}

const movieService = new MovieService();

export default movieService;
