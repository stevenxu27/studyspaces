import React from 'react';
import { useNavigate } from 'react-router-dom';
import RedirectButton from './RedirectButton.tsx';

const NavBar = () => {
    const navigate = useNavigate();
  
    const handleViewBuildingClick = () => {
      navigate("/");
    };
    return (
        <nav>
            <RedirectButton path='/' text="study.spaces"/>
            <button>Sign in</button>
        </nav>
    );
}

export default NavBar;