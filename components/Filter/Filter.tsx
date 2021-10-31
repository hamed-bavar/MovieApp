import React from "react";
import classes from "./filter.module.scss";
import { filterConstants as consts } from "../../constants/headerConstants";
import { FilterProps } from "../../types/types";
const Filter: React.FC<FilterProps> = ({ category = "popular", onChangeFilter }) => {
  return (
    <>
      <select
        onChange={onChangeFilter}
        defaultValue={category}
        name="categoties"
        className={classes.category}
      >
        <option value="popular">{consts.POPULAR}</option>
        <option value="now_playing">{consts.NOW_PLAYING}</option>
        <option value="top_rated">{consts.TOP_RATED}</option>
        <option value="upcoming">{consts.UPCOMING}</option>
      </select>
    </>
  );
};

export default Filter;
