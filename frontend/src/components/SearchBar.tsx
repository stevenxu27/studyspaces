import React from 'react';

export default function SearchBar(props) {
    return (
        <>
            <button className="search-bar">
                {props.query}
                <button className="search-button">
                    <img src="./images/search-alt-svgrepo-com.svg" width="30px" height="auto" alt="Search" />
                </button>
            </button>
        </>
    );
}