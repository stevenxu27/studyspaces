import React from 'react';
import MainTitle from './MainTitle.tsx';
import ListingContainer from './ListingContainer.tsx';

export default function MainSection() {
  return (
    <div id="middleSection">
        <MainTitle title="Found spaces" orangeTitle="near you:" desc="View the most popular study spaces."/>
        <ListingContainer/>
    </div>
  );
}
