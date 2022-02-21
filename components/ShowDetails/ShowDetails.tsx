import React from "react";
import { ShowDetailsProps } from "../../types/types";
import classes from "./ShowDetails.module.scss";
import Image from "next/image";
import useWatchList from "../../hooks/useWatchList";

const ShowDetails: React.FC<ShowDetailsProps> = ({
  backdrop_path,
  genres,
  original_title,
  overview,
  poster_path,
  release_date,
  spoken_languages,
  vote_average,
  id,
  addNotif,
}) => {
  const { add } = useWatchList();
  const numberId = Number(id);
  const numberVote = Number(vote_average);
  const addToList = () => {
    addNotif();
    add({
      id: numberId,
      poster_path,
      original_title,
      release_date,
      vote_average: numberVote,
    });
  };
  return (
    <div className={classes.movieDetailWrapper}>
      <section>
        <div
          className={classes.bg}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${backdrop_path})`,
          }}
        ></div>
        <div className={classes.imgWrapper}>
          <Image
            src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
            className={classes.img}
          ></Image>
        </div>
        <div className={classes.textWrapper}>
          <div className={classes.head}>{original_title}</div>
          <button onClick={addToList}>Add To Watch List</button>
          <p className={classes.overview}>{overview}</p>
          <ShowList head="Genres" list={genres} />
          <ShowList head="Spoken Languages" list={spoken_languages} />
          <ShowList head="Release Date" list={[{ name: release_date }]} />
        </div>
      </section>
    </div>
  );
};
const ShowList: React.FC<{ head: string; list: any[] }> = ({ head, list }) => {
  return (
    <div>
      <p className={classes.header}>{head}</p>
      <div className={classes.listItems}>
        {list.map((item, index) => {
          return <p key={index}>{item.name}</p>;
        })}
      </div>
    </div>
  );
};
export default ShowDetails;
