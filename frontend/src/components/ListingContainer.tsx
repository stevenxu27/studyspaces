import React from 'react';
import ListingComponent from './ListingComponent.tsx';

export default function ListingContainer() {
  return (
    <div id="listingContainer">
        <ListingComponent/>
        <ListingComponent/>
        <ListingComponent/>
    </div>
  );
}
