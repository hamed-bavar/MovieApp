import axios from "axios";
import { Fragment } from "react";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../../components/UI/Spinner/Spinner";
import { useParams, useHistory } from "react-router-dom";
import scrollToTop from '../../assets/icons/scrollToTopIcon/icons8-arrow-64.png'
import Card from '../../components/Card/Card'

const fetchMovies = async (params) => {
  if (!params.pageParam) params.pageParam = 1;
  let category = params.queryKey[1][0];
  const res = await axios.get(
    `movie/${category}?api_key=c46e93100eb64667d419552d00b518d6&language=en-US&page=${params.pageParam}`
  );
  const data = {
    results: res.data.results,
    next: res.data.page >= 500 ? undefined : params.pageParam + 1,
  };
  return data;
};
const Categories = () => {
  const params = useParams();
  const history = useHistory();
  const { data, error, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["movies", [params.category]],
    fetchMovies,
    { getNextPageParam: (lastPage) => lastPage.next }
  );
  const changeFilter = (event) => {
    history.push(`/${event.target.value}`);
  };
  const scrollto = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
  }
  return (
    <div
      onChange={changeFilter}
      className="bg-gray-dark w-full min-h-screen flex flex-col justify-center"
    >
      <button className="transform -rotate-90 fixed bottom-2 left-4 z-10 rounded-full w-10 h-10  bg-white text-black" onClick={scrollto}><img alt="ScrollToTop" src={scrollToTop}></img></button>
      {error && <div className="text-black">{error}</div>}
      {!data && (
        <div className="text-black">
          <Spinner />
        </div>
      )}
      {data && (
        <select
          defaultValue={params.category}
          className="w-44 h-8 ml-8 mt-2 text-white  bg-purple-dark border-2 border-purple-light rounded-md focus:outline-none"
          name="categoties"
        >
          <option value="popular">Popular</option>
          <option value="now_playing">NowPlaying</option>
          <option value="top_rated">TopRated</option>
          <option value="upcoming">Upcoming</option>
        </select>
      )}
      {data && (
        <InfiniteScroll
          dataLength={data.pages.length * 20}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<Spinner />}
          className="grid py-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6 justify-items-center"
        >
          {data.pages.map((group, i) => {
            return (
              <Fragment key={i}>
                {group.results.map((item) => (
                    <Card
                      key={item.id}
                      id={item.id}
                      release_date={item.release_date}
                      imageUrl={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                      alt={item.original_title}
                      rate={item.vote_average}
                    ></Card>
                ))}
              </Fragment>
            );
          })}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Categories;
