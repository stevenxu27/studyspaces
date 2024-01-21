import React from 'react';
import NavBar from '../components/NavBar.tsx';
import SideBar from '../components/SideBar.tsx';


export default function ViewBuilding() {
    return (
        <>
        <NavBar/>
        <div id="background">
            <SideBar/>
        </div>
        </>
    );
}
