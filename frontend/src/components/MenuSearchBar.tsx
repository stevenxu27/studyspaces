import React from 'react';
import RedirectButton from './RedirectButton.tsx';

const MenuSearchBar = (props) => {
    return (
        <>
            <button className="menu-search-bar">
                {props.query}
                <RedirectButton path={props.onClickPath} icon="../images/search-alt-svgrepo-com.svg"/>
            </button>
        </>
    );
};
    

export default MenuSearchBar;