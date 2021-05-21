import Slider from "react-slick";
import { useEffect, useState, useRef } from "react";
import React from 'react'
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import LazyImage from "../LazyImage/LazyImage";
import useDevice from "../../hooks/useDevice";
let setting = {
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  lazyLoad: true,
  accessibility: false,
  slidesToShow : 4
}
const List = (props) => {
  const [data, setData] = useState(undefined);
  const slider = useRef();
  const { id } = useParams();
  const [Device] = useDevice();
 if( Device === "Desktop") setting.slidesToShow = 4;
 else if (Device === "Tablet") setting.slidesToShow =3;
 else if (Device === "Mobile") setting.slidesToShow = 1
  useEffect(() => {
        (async () => {
          const res = await axios.get(
            `${id}/${props.type}?api_key=c46e93100eb64667d419552d00b518d6&language=en-US`
          );
          let filteredData=null;
          if(props.type === "credits")
            filteredData = res.data.cast.filter(item=>item.profile_path);
          else
            filteredData = res.data.results.filter(item=>item.poster_path);
          setData(filteredData);
        })();
  }, [id, props.type]);

  //this useEffect is only for react slick bug when page size changes
  useEffect(() => {
    setTimeout(() =>{
      slider.current.slickPrev();
    },600)
  }, [data])
  return (
    <div className=" w-11/12 mx-auto mt-6 p-7">
      {props.type === "credits" ? (
        <p className="font-bold text-purple-light text-3xl">Casts</p>
      ) : (
        <p className="font-bold text-yellow-300 text-3xl">Similar Movies</p>
      )}
      <Slider {...setting} ref={slider} className="w-full p-0 m-0">
        {data &&
          data.map((item) => {
            if (props.type === "credits")
              return <Casts key={item.credit_id} item={item} />;
            else return <Related key={item.id} item={item} id={item.id} />;
          })}
      </Slider>
    </div>
  );
};
const Casts = ({ item }) => {
    return (
      <div>
        <LazyImage
          alt={item.original_name}
          src={`https://image.tmdb.org/t/p/w400${item.profile_path}`}
        />
        <p className="m-auto block  text-center text-white border-b-2 rounded-lg border-purple-light h-6 overflow-hidden px-1">
          {item.name}
        </p>
      </div>
    );
};
const Related = ({ item }) => {
  const history = useHistory();
  const goToDetailsPage = (id) => {
    history.push(`/movie/${id}`);
  };
  return (
    <div onClick={() => goToDetailsPage(item.id)}>
      <LazyImage
        alt={item.title}
        src={`https://image.tmdb.org/t/p/w400${item.poster_path}`}
      />
      <p className="m-auto block  text-center text-white border-b-2 rounded-lg border-yellow-300 h-6 overflow-hidden px-1">
        {item.title}
      </p>
    </div>
  );
};

export default React.memo(List);
