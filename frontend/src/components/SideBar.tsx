import React from 'react';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    return (
        <div id="sideBar">
            <img id="profilePicture"/>
            <p>John Wick</p>
            <h6>Saved spots</h6>
        </div>
    );
};

export default SideBar;