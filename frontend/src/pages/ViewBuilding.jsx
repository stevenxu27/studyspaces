import React from 'react';
import NavBar from '../components/NavBar.tsx';
import SideBar from '../components/SideBar.tsx';
import MainFloor from '../components/MainFloor.tsx';
import ChatBar from '../components/ChatBar.tsx';


export default function ViewBuilding() {
    return (
        <>
        <NavBar search={true}/>
        <div id="background">
            <span>
                <SideBar/>
                <MainFloor/>
                <ChatBar/>
            </span>
            
        </div>
        </>
    );
}
