import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
  
    const handleViewBuildingClick = () => {
      navigate("/");
    };
    return (
        <nav>
            <button className="homeName" onClick={handleViewBuildingClick}>study.spaces</button>
            <button>Sign in</button>
        </nav>
    );
}

export default NavBar;