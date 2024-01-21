import React from 'react';
import RedirectButton from './RedirectButton.tsx';
import MenuSearchBar from './MenuSearchBar.tsx';

const NavBar = (props) => {
    return (
        <nav>
            <RedirectButton path='/' text="StudyScout" type="home" />
            {props.search && <MenuSearchBar query="Irving K. Barber Learning Centre, 1961 E Mall, Vancouver, BC V6T 1Z1"onClickPath='/main'/>}
            <RedirectButton text="Sign in" type="login"/>
        </nav>
    );
}

export default NavBar;