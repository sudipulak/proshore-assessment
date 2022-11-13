import React, { useState, createContext } from "react";
import "./App.css";

// packages 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

// Components 
import SearchBar from "./components/SearchBar";
import SearchDetail from "./components/SearchDetail";

// Context 
export const searchContext = createContext();

function App() {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  const getRepoData = async (data) => {
    // With Bearer Token
    var requestOption = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer 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'
      },
      redirect: 'follow'
    };
    setLoading(true);
    try {
      // With Bearer Token
      const response = await axios(`https://api.github.com/search/repositories?q="${searchValue}"&page=1&per_page=1000&sort=${data}`, requestOption)
      // const response = await axios(
      //   `https://api.github.com/search/repositories?q="${searchValue}"&page=1&per_page=1000&sort=${data}`
      // );
      setLoading(false);
      response.data.total_count === 0
        ? alert("No Data Found")
        : (
          (setRepos(response.data.items))
        )
    } catch (error) {
      console.log(error)
    }
  };

  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage, setReposPerPage] = useState(10);

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);
  const totalRepos = repos.length;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <searchContext.Provider value={{ repos, setRepos, loading, setLoading, getRepoData, searchValue, setSearchValue, totalRepos, reposPerPage, setReposPerPage, currentRepos, paginate, currentPage }}>
        <Router>
          <Routes>
            <Route path="/" element={<SearchBar />} ></Route>
            <Route path="/search-detail/:repoId" element={<SearchDetail />}></Route>
          </Routes>
        </Router>
      </searchContext.Provider>
    </>
  );
}

export default App;
