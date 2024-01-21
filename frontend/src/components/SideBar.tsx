import React from 'react';
import { useNavigate } from 'react-router-dom';
import SavedSpotComponent from './SavedSpotComponent.tsx';

const SideBar = () => {
    return (
        <div id="sideBar">
            <img id="profilePicture"/>
            <h6>Kel</h6>
            <p>Saved spots</p>
            <SavedSpotComponent name="Irvking b asd" distance="gadsdf"/>
            <SavedSpotComponent name="Irvking b asd" distance="gadsdf"/>
        </div>
    );
};

export default SideBar;