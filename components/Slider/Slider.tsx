import React from "react";
import classes from "./slider.module.scss";
import SliderPackage from "react-slick";
import { useRouter } from "next/router";
import useSlider from "../../hooks/useSlider";
import Spinner from "../Spinner/Spinner";
import Image from "next/image";
import { useDevice } from "../../hooks/useDevice";
let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};
const Slider: React.FC<{ id: string }> = ({ id }) => {
  const { loading, data, error } = useSlider(id);
  const device = useDevice();
  if (device && device?.width < 700) {
    settings.slidesToShow = 1;
  }
  if (device && device?.width > 700 && device?.width < 1100) {
    settings.slidesToShow = 3;
  }
  if (device && device?.width > 1400) {
    settings.slidesToShow = 4;
  }
  return (
    <>
      <p className={classes.path}>Casts</p>
      {loading && <Spinner></Spinner>}
      {error && "someThing bad happend"}
      <SliderPackage {...settings} className={classes.sliderContainer}>
        {data &&
          data.cast.map((item) => (
            <div key={item.id} className={classes.sliderItem}>
              <Image
                src={`https://movie-galaxy-proxy.herokuapp.com/movies/image${item.profile_path}/500`}
                layout="responsive"
                width={"100%"}
                height={"100%"}
                objectFit="cover"
                className={classes.img}
              ></Image>
              <p className={classes.name}>{item.name}</p>
            </div>
          ))}
      </SliderPackage>
    </>
  );
};

export default Slider;
