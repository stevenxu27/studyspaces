import React from 'react';
import LandingTitle from './components/LandingTitle.tsx'
import NavBar from './components/NavBar.tsx';
import SearchBar from './components/SearchBar.tsx';
import MainTitle from './components/MainTitle.tsx';
import MainStudySpace from './components/MainStudySpace.tsx';

export default function ViewBuilding() {
    return (
        <>
        <NavBar/>
        <div id="background">
            <div className="titleSection">
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
                <MainTitle title="From the comfort of your " orangeTitle="home" desc="View the most popular study spaces and make it convenient."/>
                <img className="mainImage" src="./images/landing/mapGraphic.png" maxWidth="700px"/>
                <div className="backgroundContainer">
                    <img className="bubbles" src="./images/landing/backBubbles.png"/>
                    <img className="locPathLeft" src="./images/landing/locPathLeft.png" width="120px" height="auto"/>
                    <img className="locPathRight" src="./images/landing/locPathRight.png" width="120px" height="auto"/>
                    <img className="locPathBottom" src="./images/landing/locPathBottom.png" width="180px" height="auto"/>
                </div>
                
            </div>
        </div>
        </>
        
    );
}
