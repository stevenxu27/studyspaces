import React from 'react';
import { useNavigate } from 'react-router-dom';
import SavedSpotComponent from './SavedSpotComponent.tsx';

const SideBar = () => {
    return (
        <div id="sideBar">
            <img id="profilePicture" src="./images/viewBuildings/RW_Kel_Neutral_29.webp"/>
            <h6>Kel, lv.14</h6>
            <p>Saved spots</p>
            <SavedSpotComponent name="Irving K Barber" distance="700m"/>
            <SavedSpotComponent name="Irving K Barber" distance="120m"/>
            <SavedSpotComponent name="Irving K Barber" distance="200m"/>
            <SavedSpotComponent name="Irving K Barber" distance="700m"/>
            <SavedSpotComponent name="Irving K Barber" distance="100m"/>
            <button id="settings">Settings</button>
        </div>
    );
};

export default SideBar;