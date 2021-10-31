import React from "react";
import { CardsProps } from "../../types/types";
import Card from "./Card/Card";
import classes from "./cards.module.scss";
const Cards: React.FC<CardsProps> = ({ movies, isWatchList = false }) => {
  return (
    <div className={classes.cardsWrapper}>
      {movies &&
        movies.map((e) => (
          <Card
            id={e.id}
            key={e.id}
            release_date={e.release_date}
            poster_path={e.poster_path}
            original_title={e.original_title}
            vote_average={e.vote_average}
            isWatchList={isWatchList}
          />
        ))}
    </div>
  );
};

export default Cards;
