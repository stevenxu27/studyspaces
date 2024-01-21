import React from 'react';
import LandingTitle from './components/LandingTitle.tsx'

export default function Landing() {
    return (
        <div id="landingPage">
            <div id="titleSection">
                <LandingTitle title="Welcome to My App" desc="Find study spaces from the comfort of your home."/>
            </div>
        </div>
    );
}
