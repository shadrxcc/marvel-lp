import React from "react";
import ReactPaginate from "react-paginate";

const Paginate = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const pages = [];

  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex flex-wrap md:flex-nowrap py-10 justify-center pagination">
      {pages.map((page, id) => {
        return (
          <>
            <button
              onClick={() => setCurrentPage(page)}
              className={`${
                page === currentPage ? "active" : ""
              } m-2 w-[2.5em]`}
              key={id}
            >
              {page}
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Paginate;
