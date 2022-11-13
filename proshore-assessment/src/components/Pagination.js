import React from "react";

const Pagination = ({ reposPerPage, totalRepos, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-wrapper">
      {reposPerPage < totalRepos ? (
        <ul className="pagination">
          {pageNumbers.length !== 0 && currentPage !== 1 ? (
            <li className="page-item prev">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  paginate(currentPage - 1);
                }}
                href="!#"
                className="page-link"
              >
                Previous
              </a>
            </li>
          ) : (
            ""
          )}
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${number === currentPage ? "active" : ""}`}
            >
              <a
                onClick={(e) => {
                  e.preventDefault();
                  paginate(number);
                }}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
          {pageNumbers.length !== 0 && currentPage !== pageNumbers.length ? (
            <li className="page-item next">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  paginate(currentPage + 1);
                }}
                href="!#"
                className="page-link"
              >
                Next
              </a>
            </li>
          ) : (
            ""
          )}
        </ul>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Pagination;
