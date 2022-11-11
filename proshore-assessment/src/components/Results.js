import React from "react";
import { AiOutlineBook, AiOutlineEye, AiOutlineStar, AiOutlineFork } from "react-icons/ai";


const Results = ({ repos }) => {
    const listRepos = repos.map(item => {
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
    })
    return (
        <div className="search-list">
            {repos.length ? (
                <div className="search-info">
                    <h3>{repos.length} repository results </h3>
                    <select className="select-input">
                        <option value="Best Match">Best Match</option>
                        <option value="Best Match">Most Stars</option>
                        <option value="Best Match">Fewest Stars</option>
                        <option value="Best Match">Most Forks</option>
                        <option value="Best Match">Fewest Forks</option>
                        <option value="Best Match">Recently Updated</option>
                        <option value="Best Match">Least Recently Updated</option>
                    </select>
                </div>
            ) : ''}
            <ul className="list">
                {
                    repos.length !== 0 ? (
                        listRepos
                    ) : <h3 style={{ marginTop: 20, textAlign: 'center' }}>No Repositories found</h3>
                }

            </ul>
        </div>
    );
};

export default Results;
