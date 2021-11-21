import React, { useState } from "react";
import classes from "./card.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { CardProps } from "../../../types/types";
import useWatchList from "../../../hooks/useWatchList";
const Card: React.FC<CardProps> = ({
  id,
  release_date,
  poster_path,
  original_title,
  vote_average,
  isWatchList,
}) => {
  const { remove } = useWatchList();
  const router = useRouter();
  const srcImage = `https://reverse-proxy-movie-app.herokuapp.com/movies/image${poster_path}/300`;
  const changePage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    router.push(`/Movie/${id}`);
  };
  const removeItem = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    remove(id);
  };
  return (
    <div className={classes.card} onClick={changePage}>
      {isWatchList && (
        <div className={classes.deleteIcon} onClick={removeItem}>
          remove
        </div>
      )}
      <div className={classes.imageConatiner}>
        <Image
          src={srcImage}
          className={classes.image}
          width={250}
          height={350}
          alt={original_title}
        ></Image>
      </div>
      <div className={classes.rate}>{vote_average}</div>
      <section className={classes.cardContent}>
        <p className={classes.title}>{original_title}</p>
        <p className={classes.date}>{release_date}</p>
      </section>
    </div>
  );
};

export default Card;
