import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import 'react-awesome-slider/dist/styles.css';

import axios from "axios";
const Gallery = () => {
  const { id } = useParams();
  const [data, setData] = useState(undefined);
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${id}/images?api_key=c46e93100eb64667d419552d00b518d6&language=null`
      );
      setData(res.data.backdrops);
    })();
  }, [id]);
  return (
    <div className="w-full">
      {data && (
        <AwesomeSlider animation="foldOutAnimation" className="">
          {data.map((item,i) => {
            return (
              <div
                key={i}
                data-src={`https://image.tmdb.org/t/p/original/${item.file_path}`}
              ></div>
            );
          })}
        </AwesomeSlider>
      )}
    </div>
  );
};

export default Gallery;
