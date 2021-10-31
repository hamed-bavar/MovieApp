import { NextPage } from "next";
import React from "react";
import Cards from "../../components/Cards/Cards";
import { useWatchListContext } from "../../hooks/useWatchList";
const Index: NextPage = () => {
  const watchlist = useWatchListContext();
  return <Cards movies={watchlist} isWatchList={true} />;
};

export default Index;
