import React from "react";
import { usePagination } from "../hooks/pagination"; 

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const paginationRange = usePagination({
    totalItems,
    itemsPerPage,
    currentPage,
    siblingCount: 1,
  });

  if (paginationRange.length < 2) return null;

  const onPageClick = (page) => {
    if (page !== "...") onPageChange(page);
  };

  return (
    <ul className="flex items-center justify-center space-x-2 mt-4">
      <li>
        <button
          className={`px-3 py-1 rounded ${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-backgroundSecond"
          }`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo;
        </button>
      </li>

      {paginationRange.map((page, idx) => (
        <li key={idx}>
          <button
            className={`px-3 py-1 rounded ${
              page === currentPage
                ? "bg-blue-500 text-white"
                : "bg-backgroundSecond hover:bg-gray-300"
            }`}
            onClick={() => onPageClick(page)}
          >
            {page}
          </button>
        </li>
      ))}

      <li>
        <button
          className={`px-3 py-1 rounded ${
            currentPage === Math.ceil(totalItems / itemsPerPage)
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-backgroundSecond"
          }`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
        >
          &raquo;
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
