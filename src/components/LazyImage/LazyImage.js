import Spinner from "../UI/Spinner/Spinner";
import {useCallback,useState,useEffect} from 'react'
const LazyImage = (props) => {
    const [imgSrc, setSrc] = useState(undefined);
    const onLoad = useCallback(() => {
      setSrc(props.src);
    }, [props.src]);
    useEffect(() => {
      const img = new Image();
      img.src = props.src;
      img.addEventListener("load", onLoad);
      return () => {
        img.removeEventListener("load", onLoad);
    };
  }, [props.src, onLoad]);
      
  return (
      <>
      {imgSrc &&
        <img
          src={imgSrc}
          className={props.classes}
          alt={props.alt}
        ></img>
        }
        {!imgSrc && <div className={`${props.classes} w-full h-full flex justify-center align-center`}><Spinner/></div>}
      </>  
      
  );
};

export default LazyImage;
