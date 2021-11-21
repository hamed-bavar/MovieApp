import React from "react";
import classes from "./gallery.module.scss";
import useGallery from "../../hooks/useGallery";
import { useRouter } from "next/router";
import Spinner from "../Spinner/Spinner";
import SliderPackage from "react-slick";
let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Gallery: React.FC<{ id: string }> = ({ id }) => {
  const { loading, data, error } = useGallery(id);
  return (
    <>
      {loading && <Spinner />}
      {error && <p>someThing bad happend</p>}
      <p className={classes.headGallery}>Gallery</p>
      <SliderPackage className={classes.gallery} {...settings}>
        {data?.backdrops.map((item) => (
          <div key={item.file_path}>
            <img
              src={`https://reverse-proxy-movie-app.herokuapp.com/movies/gallery${item.file_path}`}
              width={"100%"}
              height={"100%"}
              className={classes.img}
            ></img>
          </div>
        ))}
      </SliderPackage>
    </>
  );
};

export default Gallery;
