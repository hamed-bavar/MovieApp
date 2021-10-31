import React from "react";
import movieService from "../services/movieService";
const useSearch = () => {
  const search = async (name: string) => {
    return await movieService.searchByName(name);
  };
  return { search };
};

export default useSearch;
