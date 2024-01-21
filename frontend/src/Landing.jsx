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
                    <MainStudySpace img="../images/UBC_Irving_5-scaled.jpg" name="Irving K Barber Building" desc="The Irving K Barber Learning Centre provides a world-class facility for students and community members to study and collaborate."/>
                    <MainStudySpace img="../images/UBC_Irving_5-scaled.jpg" name="Irving K Barber Building" desc="The Irving K Barber Learning Centre provides a world-class facility for students and community members to study and collaborate."/>
                    <MainStudySpace img="../images/UBC_Irving_5-scaled.jpg" name="Irving K Barber Building" desc="The Irving K Barber Learning Centre provides a world-class facility for students and community members to study and collaborate."/>
                    
                </div>
            </div>
            
        </div>
        </>
        
    );
}
