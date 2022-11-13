import React, { useState, useContext, useRef } from "react";
import {
  AiOutlineBook,
  AiOutlineEye,
  AiOutlineStar,
  AiOutlineFork,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { searchContext } from "../App";
import Pagination from "./Pagination";

const Results = () => {
  const {
    repos,
    loading,
    totalRepos,
    setReposPerPage,
    reposPerPage,
    getRepoData,
    currentRepos,
  } = useContext(searchContext);

  const perPageSelect = useRef();
  const sortingSelect = useRef();

  const [filterValue, setFilterValue] = useState("");

  const perPageChange = () => {
    setReposPerPage(perPageSelect.current.value);
  };

  const sortValueChange = () => {
    setFilterValue(sortingSelect.current.value);
    getRepoData(sortingSelect.current.value);
  };

  const listRepos = loading ? (
    <h2 className="loading">Loading...</h2>
  ) : (
    currentRepos.map((item) => {
      return (
        <li key={item.id}>
          <div className="list-style">
            <AiOutlineBook className="icon" />
          </div>
          <div className="list-description">
            <Link to={"search-detail/" + item.id}>{item.name}</Link>
            <p>{item.description.slice(0, 250)}</p>
            <div className="repo-info">
              <span>
                <AiOutlineStar /> {item.stargazers_count}{" "}
              </span>
              <span>
                <AiOutlineEye /> {item.watchers_count}{" "}
              </span>
              <span>
                <AiOutlineFork /> {item.forks_count}{" "}
              </span>
              <span>Update on {item.updated_at.slice(0, 10)}</span>
            </div>
          </div>
        </li>
      );
    })
  );
  return (
    <>
      {loading ? (
        <h3 className="loading">Loading ...</h3>
      ) : (
        <div className="search-list">
          {repos.length ? (
            <div className="search-info">
              <h3>{totalRepos} repository results </h3>
              <div className="filters">
                <div>
                  <span>Per page</span>
                  <select
                    className="select-input"
                    ref={perPageSelect}
                    onChange={() => perPageChange()}
                    value={reposPerPage}
                  >
                    <option value="10">10</option>
                    <option value="20">25</option>
                    <option value="50">50</option>
                  </select>
                </div>
                <select
                  className="select-input"
                  ref={sortingSelect}
                  onChange={() => sortValueChange()}
                  value={filterValue}
                >
                  <option value="">- Select sort -</option>
                  <option value="stars">Most Stars</option>
                  <option value="forks">Most Forks</option>
                </select>
              </div>
            </div>
          ) : (
            ""
          )}
          <ul className="list">{repos.length !== 0 ? listRepos : ""}</ul>
          <Pagination />
        </div>
      )}
    </>
  );
};

export default Results;
