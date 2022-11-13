import React, { useContext } from "react";
import { AiOutlineBook, AiOutlineLink } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { searchContext } from "../App";

const SearchDetail = () => {
  const { repos } = useContext(searchContext);
  const { repoId } = useParams();
  const data = repos.filter((item) => repoId === item.id.toString());
  const filteredData = data.map((item) => {
    return (
      <div className="result-box" key={item.id}>
        <div className="title">
          <h2>
            <a href={item.html_url}>
              <AiOutlineLink className="icon" />
            </a>
            {item.name}
          </h2>
          <h2>
            <AiOutlineBook className="icon" />{" "}
            <a href={item.clone_url}> {item.full_name} </a>
          </h2>
        </div>
        <div className="result-info">
          <div>Open issues : {item.open_issues_count}</div>
          <div>Default branch : {item.default_branch}</div>
        </div>
        <p>{item.description}</p>
      </div>
    );
  });
  return (
    <div className="search-detail">
      <div className="container">
        {data.length !== 0 ? filteredData : "No Data"}
      </div>
    </div>
  );
};

export default SearchDetail;
