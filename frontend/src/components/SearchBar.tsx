import React from 'react';
import RedirectButton from './RedirectButton.tsx';

const SearchBar = (props) => {
    return (
        <>
            <button className="search-bar">
                {props.query}
                <RedirectButton path={props.onClickPath} icon="../images/search-alt-svgrepo-com.svg"/>
            </button>
        </>
    );
};
    

export default SearchBar;