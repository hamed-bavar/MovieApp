import React from "react";
import classes from "./pagination.module.scss";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { PaginationProps } from "../../types/types";
import { usePagination } from "../../hooks/usePagination";
const Pagination: React.FC<PaginationProps> = ({ numberOfPages, pageLimit = 5, onChangePage }) => {
  const { currentPage, goToNextPage, goToPreviousPage, changePage, getPaginationGroup } =
    usePagination({ numberOfPages, pageLimit, onChangePage });
  return (
    <div className={classes.list}>
      <button disabled={currentPage === 1} className={classes.btn} onClick={goToPreviousPage}>
        <AiOutlineArrowLeft cursor="pointer" />
      </button>
      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={(e) => changePage(e, item)}
          className={`${classes.item} ${item === currentPage ? classes.activeItem : ""}`}
        >
          <span>{item}</span>
        </button>
      ))}
      <button
        disabled={currentPage === numberOfPages}
        onClick={goToNextPage}
        className={classes.btn}
      >
        <AiOutlineArrowRight cursor="pointer" />
      </button>
    </div>
  );
};

export default Pagination;
