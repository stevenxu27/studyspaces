import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = (props) => {
    const navigate = useNavigate();
  
    const handleViewBuildingClick = () => {
      // Navigate to the ViewBuilding page when the button is clicked
      navigate(props.onClickPath);
    };
    return (
        <>
            <button className="search-bar">
                {props.query}
                <button className="search-button" onClick={handleViewBuildingClick}>
                    <img src="./images/search-alt-svgrepo-com.svg" width="30px" height="auto" alt="Search" />
                </button>
            </button>
        </>
    );
}

export default SearchBar;