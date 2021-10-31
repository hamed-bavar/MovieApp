import { useState } from "react";
import { PaginateParams } from "../types/types";
export const usePagination = ({ numberOfPages, pageLimit = 5, onChangePage }: PaginateParams) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pages] = useState(numberOfPages);
  function goToNextPage() {
    setCurrentPage((prev) => {
      onChangePage(prev + 1);
      return prev + 1;
    });
  }
  function goToPreviousPage() {
    setCurrentPage((prev) => {
      onChangePage(prev - 1);
      return prev - 1;
    });
  }
  function changePage(e: any, item: number) {
    onChangePage(item);
    setCurrentPage(item);
  }
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill(0).map((_, idx) => start + idx + 1);
  };
  return { currentPage, goToNextPage, goToPreviousPage, changePage, getPaginationGroup };
};
