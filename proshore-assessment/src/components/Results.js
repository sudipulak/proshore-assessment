import React, { useRef } from "react";
import { AiOutlineBook, AiOutlineEye, AiOutlineStar, AiOutlineFork } from "react-icons/ai";


const Results = ({ repos, loading, totalRepos, setReposPerPage, reposPerPage, getRepoData }) => {

    const perPageSelect = useRef();
    const sortingSelect = useRef();

    const perPageChange = () => {
        setReposPerPage(perPageSelect.current.value)
    }

    const sortValueChange = () => {
        getRepoData(sortingSelect.current.value)
    }

    const listRepos =
        loading ? (
            <h2>Loading...</h2>
        ) : (
            repos.map(item => {
                return (
                    <li key={item.id}>
                        <div className="list-style">
                            <AiOutlineBook className="icon" />
                        </div>
                        <div className="list-description">
                            <a href=" #">{item.name}</a>
                            <p>
                                {item.description}
                            </p>
                            <div className="repo-info">
                                <span><AiOutlineStar /> {item.stargazers_count} </span>
                                <span><AiOutlineEye /> {item.watchers_count} </span>
                                <span><AiOutlineFork /> {item.forks_count} </span>
                                <span>Update on {item.updated_at.slice(0, 10)}</span>
                            </div>
                        </div>
                    </li>
                )
            }));
    return (
        <div className="search-list">
            {repos.length ? (
                <div className="search-info">
                    <h3>{totalRepos} repository results </h3>
                    <div className="filters">
                        <div>
                            <span>Per page</span>
                            <select className="select-input" ref={perPageSelect} onChange={() => perPageChange()} value={reposPerPage} defaultValue={reposPerPage}>
                                <option value="10">10</option>
                                <option value="20">25</option>
                                <option value="50">50</option>
                            </select>
                        </div>
                        <select className="select-input" ref={sortingSelect} onChange={() => sortValueChange()}>
                            {/* <option value="" selected disabled>- Select Sorting Value -</option> */}
                            <option value="">- Select sort -</option>
                            <option value="updated">Recently Updated</option>
                            <option value="stars">Most Stars</option>
                            <option value="forks">Most Forks</option>
                        </select>
                    </div>
                </div>
            ) : ''
            }
            <ul className="list">
                {
                    repos.length !== 0 ? (
                        listRepos
                    ) : <h3 style={{ marginTop: 20, textAlign: 'center' }}>No Repositories found</h3>
                }

            </ul>
        </div >
    );
};

export default Results;
