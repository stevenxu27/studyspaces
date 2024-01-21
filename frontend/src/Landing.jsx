import React from 'react';
import LandingTitle from './components/LandingTitle.tsx'
import NavBar from './components/NavBar.tsx';
import SearchBar from './components/SearchBar.tsx';
import MainTitle from './components/MainTitle.tsx';
import MainStudySpace from './components/MainStudySpace.tsx';

export default function Landing() {
    return (
        <>
        <NavBar/>
        <div id="background" width="100vw" height="100vh">
            <div id="titleSection">
                <LandingTitle title="Find your" orangeTitle="space." desc="Find study spaces from the comfort of your home."/>
                <SearchBar query="Where would you like to study today?"/>
            </div>
            <div id="mainSection">
                <MainTitle title="Popular" orangeTitle="study spaces" endTitle="near you:" desc="View the most popular study spaces and make it convenient."/>
                <div id="mainSpacesContainer">
                    <MainStudySpace/>
                    <MainStudySpace/>
                    <MainStudySpace/>
                </div>
            </div>
            
        </div>
        </>
        
    );
}
