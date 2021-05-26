import searchIcon from "../../../assets/icons/searchIcon/icons8-search-100.png";
import classes from "./Search.module.css";
import { useState, useEffect ,useCallback} from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom'

const Search = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchList, setSearchList] = useState([]);
  const history = useHistory();
  const changeText = ({ target }) => {
    if (target.value) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
    setSearchText(target.value);
  };
  const reset = useCallback(() => {
    setShowModal(false);
    setSearchText("");
    setSearchList([]);
},[])
  useEffect(() => {
    if (searchText) {
      (async () => {
        const res = await axios.get(
          `search/movie?api_key=c46e93100eb64667d419552d00b518d6&language=en-US&query=${searchText}&page=1&include_adult=false`
        );
        setSearchList(res.data.results);
      })();
    }
  }, [searchText]);
  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);
  const goToDetails = (id) =>{
    reset();
    history.push(`/movie/${id}`)
  }
  
  return (
    <div className="flex flex-col relative">
      <div className="flex items-center">
        <input
          placeholder="search movie ..."
          type="text"
          className={classes["input"]}
          value={searchText}
          onChange={changeText}
        ></input>
        <button className="-ml-8 rounded-full  w-7 h-7 flex justify-center transform scale-110 hover:scale-125">
          <img
            src={searchIcon}
            alt="searchIcon"
            className="transform scale-50 shadow"
          ></img>
        </button>
      </div>
      {showModal && (
        <div className="flex flex-col absolute bg-white text-gray-dark top-10 rounded-lg w-60 sm:w-72  z-30 min-h-28 max-h-52 overflow-y-scroll">
          {searchList.map((item) => {
            return (
              <div onClick={()=>goToDetails(item.id)} key={item.id} className="w-full h-12 flex justify-center items-center border-b-2  border-purple-light hover:bg-gray-dark hover:text-white cursor-pointer bg-white text-gray-dark">
                {item.title}
                
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
