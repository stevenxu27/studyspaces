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
            <RedirectButton path='/' text="StudyScout" type="home" />
            <RedirectButton text="Sign in" type="login"/>
        </nav>
    );
}

export default NavBar;