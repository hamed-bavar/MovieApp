import { CardProps } from "../types/types";
import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
const WatchlistContext = createContext<CardProps[]>([]);
const WatchListSet = createContext<Dispatch<SetStateAction<CardProps[]>>>({} as any);

export const useWatchListContext = () => {
  return useContext(WatchlistContext);
};
const useWatchListSetContext = () => {
  return useContext(WatchListSet);
};

export const WatchListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setstate] = useState<CardProps[]>([]);
  useEffect(() => {
    let watchlistStorage = localStorage.getItem("watchlist");
    if (watchlistStorage) {
      setstate(JSON.parse(watchlistStorage));
    }
  }, []);
  return (
    <WatchlistContext.Provider value={state}>
      <WatchListSet.Provider value={setstate}>{children}</WatchListSet.Provider>
    </WatchlistContext.Provider>
  );
};
const useWatchList = () => {
  const watchlistState = useWatchListContext();
  const setWatchlist = useWatchListSetContext();
  const add = (card: CardProps) => {
    let doExist = watchlistState.find((item) => item.id === card.id);
    if (!doExist) {
      setWatchlist([...watchlistState, card]);
      localStorage.setItem("watchlist", JSON.stringify([...watchlistState, card]));
    }
  };
  const remove = (id: number) => {
    const newlist = watchlistState.filter((item) => item.id !== id);
    localStorage.setItem("watchlist", JSON.stringify(newlist));
    setWatchlist(newlist);
  };
  return { add, remove };
};
export default useWatchList;
