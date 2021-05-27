import React from "react";

const watchListContext = React.createContext();
const watchListContextSet = React.createContext();

const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = React.useState([]);
  return (
    <watchListContext.Provider value={watchList}>
      <watchListContextSet.Provider value={setWatchList}>
        {children}
      </watchListContextSet.Provider>
    </watchListContext.Provider>
  );
};

const useWatchListState = () => {
  return React.useContext(watchListContext);
};
const useWatchListSetState = () => {
  return React.useContext(watchListContextSet);
};

const useWatchListActions = () => {
  const wLState = useWatchListState();
  const wLsetState = useWatchListSetState();
  const add = (newItem) => {
    const watchListArray = [...wLState];
    const index = watchListArray.findIndex((curr) => {
      return curr.id === newItem.id;
    });
    if (index === -1) {
      watchListArray.push(newItem);
      wLsetState(watchListArray);
      localStorage.setItem("watchList", JSON.stringify(watchListArray));
    }
  };

  const remove = (id) => {
    const watchListArray = [...wLState];
    const filteredWatchList = watchListArray.filter(
      (curr) => curr.id !== id
    );
    wLsetState(filteredWatchList);
    localStorage.setItem("watchList", JSON.stringify(filteredWatchList));
  };

  const setWatchListFromStorage = () => {
    let list = JSON.parse(localStorage.getItem("watchList"));
    if (list === null) list = [];
    wLsetState(list);
  };
  return { add, remove, setWatchListFromStorage };
};

export default WatchListProvider;
export { useWatchListState, useWatchListActions };
