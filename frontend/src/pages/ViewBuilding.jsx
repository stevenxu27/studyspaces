import React from 'react';
import NavBar from '../components/NavBar.tsx';
import SideBar from '../components/SideBar.tsx';
import MainFloor from '../components/MainFloor.tsx';
import ChatBar from '../components/ChatBar.tsx';


export default function ViewBuilding() {
    return (
        <>
        <NavBar/>
        <div id="background">
            <SideBar/>
            <MainFloor/>
            <ChatBar/>
        </div>
        </>
    );
}
