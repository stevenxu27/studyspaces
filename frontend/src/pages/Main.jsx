import React from 'react';
import NavBar from '../components/NavBar.tsx';
import SideBar from '../components/SideBar.tsx';
import MainSection from '../components/MainSection.tsx';
import ChatBar from '../components/ChatBar.tsx';

export default function Main() {
    return (
        <>
        <NavBar/>
        <div id="background">
            <SideBar/>
            <MainSection/>
            <ChatBar/>
        </div>
        </>
    );
}
