import React from 'react';
import ListingComponent from './ListingComponent.tsx';

export default function ListingContainer() {
  return (
    <div id="listingContainer">
        <ListingComponent name="Irving K Barber Building" desc="The Irving K. Barber Learning Centre is a facility at the Vancouver campus of the University of British Columbia. The learning centre..." distance="700m away" img="./images/UBC_Irving_5-scaled.jpg"/>
        <ListingComponent name="Black Ball Tea House" desc="Authentic Taiwanese Desserts and Drinks 8300 Capstan Way 2184 W 41st Ave 1190 Robson St 3377 Kingsway. www.blackballna.com." distance="2.6km away" img="./images/348s.jpg"/>
        <ListingComponent name="Vancouver Central Library" desc="Located in Library Square which occupies a full city block: bounded by Homer, Hamilton, Robson and Georgia Streets." distance="3.2km away" img="./images/1080px-vancouver_public_central_library_36907920883.jpg"/>
    </div>
  );
}
