import React, { useState } from "react";
import classes from "./search.module.scss";
import { headerConstants as consts } from "../../../constants/headerConstants";
import debounce from "lodash.debounce";
import useSearch from "../../../hooks/useSearch";
import { SearchResults } from "../../../types/types";
import { useRouter } from "next/router";
//debounce in loadash
const Search = () => {
  const [text, setSearchText] = useState<string>("");
  const [results, setResults] = useState<SearchResults>();
  const { search } = useSearch();
  const router = useRouter();
  const onSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    if (event.target.value.trim() !== "") {
      const data = await search(event.target.value);
      setResults(data);
    } else {
      setResults(undefined);
    }
  };
  const changePage = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>, id: number) => {
    setResults(undefined);
    router.push(`/Movie/${id}`);
  };
  const debounceHandleSearch = debounce(onSearch, 500);

  return (
    <>
      <div className={classes.searchBar}>
        <input type="text" placeholder={consts.SEARCHBAR} onChange={debounceHandleSearch} />
        {results && results.results.length > 0 && (
          <div className={classes.resultContainer}>
            {results &&
              results.results.length > 0 &&
              results.results.map((result) => (
                <p
                  key={result.id}
                  className={classes.item}
                  onClick={(e) => changePage(e, result.id)}
                >
                  {result.title}
                </p>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
