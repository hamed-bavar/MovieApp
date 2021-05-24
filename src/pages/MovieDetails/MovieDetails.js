import { useParams, useHistory } from "react-router-dom";
import arrowImg from "../../assets/icons/scrollToTopIcon/icons8-arrow-64.png";
import axios from "axios";
import React from 'react'
import { useEffect, useState } from "react";
import Spinner from "../../components/UI/Spinner/Spinner";
import LazyImage from "../../components/LazyImage/LazyImage";
import classes from "./MovieDetails.module.css";
import { lazy, Suspense } from "react";
const List = lazy(() => import("../../components/List/List"));
const Gallery = lazy(()=>import("../../components/Gallery/Gallery"))
const MovieDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const [data, setData] = useState(undefined);
  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      const res = await axios.get(
        `movie/${id}?api_key=c46e93100eb64667d419552d00b518d6&language=en-US`
      );
      setData(res.data);
    })();
  }, [id]);

  const goBack = () => {
    history.goBack();
  };
  return (
    <>
      {!data && (
        <div className="absolute top-2/4 left-2/4 h-auto">
          <Spinner />
        </div>
      )}
      {data && (
        <div className={`bg-gray-dark min-h-screen ${classes.hide}`}>
          <div className="bg-gray-dark w-full min-h-screen grid grid-cols-8 relative">
            <div
              className="absolute top-0 left-0 filter blur-sm w-full h-full bg-cover"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${data.backdrop_path})`,
              }}
            ></div>
            <img
              src={arrowImg}
              className="transform rotate-180 scale-75 cursor-pointer hover:scale-90 rounded-full"
              alt="go back"
              onClick={goBack}
            ></img>
            <div className="bg-gray-dark col-span-8 xl:col-start-2 xl:col-span-6 z-10 my-10 h-[1080px] md:h-[575px] bg-opacity-60 rounded-xl mx-4 md:flex relative">
              <LazyImage
                src={`https://image.tmdb.org/t/p/w400/${data.poster_path}`}
                classes="w-full h-3/6 md:w-5/12 md:h-full  lg:w-2/6 rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl"
                alt={data.original_title}
              />
              <div className="flex items-center absolute top-0 left-1">
                <pre className="text-white rounded-full border-2 absolute top-2 left-2 bg-gray-dark border-yellow-300 w-10 h-10 flex justify-center items-center">
                  {data.vote_average}
                </pre>
              </div>
              <section className={`h-3/6 lg:w-4/6 md:h-full overflow-auto ${classes.hide}`}>
                <div className="flex justify-center items-center py-2 shadow-sm relative font-bold text-lg px-1">
                  <p className="text-yellow-300 font-bold text-lg py-1">
                    {data.original_title}
                  </p>
                </div>

                <div className="flex flex-col justify-items-start mt-4 items-center px-2 relative">
                  <button
                    className={`cursor-not-allowed ${classes.watchListBtn}`}
                  >
                    ADD TO WATCH LIST
                  </button>
                  <p className="font-bold text-lg mb-5">{data.overview}</p>

                  <ShowList head="Genres" list={data.genres} />
                  <ShowList
                    head="Spoken Languages"
                    list={data.spoken_languages}
                  />
                  <ShowList
                    head="Release Date"
                    list={[{ name: data.release_date }]}
                  />
                </div>
              </section>
            </div>
          </div>
            <Suspense fallback={<Spinner />}>
              <List type="credits" />
            </Suspense>
            <Suspense fallback={<Spinner />}>
              <List type="similar" />
          </Suspense>
           <Suspense fallback={<Spinner />}>
              <Gallery />
            </Suspense>
        </div>
      )}
    </>
  );
};
const ShowList = ({ head, list }) => {
  return (
    <div className="m-auto w-full mb-5">
      <p className="text-bold text-yellow-300 mb-2 text-lg">{head}</p>
      <div className="flex justify-start items-center text-lg flex-wrap">
        {list.map((item, index) => {
          return (
            <p
              key={index}
              className="ml-3 mb-2 block bg-gray-dark px-2 rounded-lg shadow-sm"
            >
              {item.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default React.memo(MovieDetails);
