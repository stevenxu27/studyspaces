import React from 'react';

export default function ListingComponent(props) {
  return (
    <div className="listingComponent">
        <img src="./images/UBC_Irving_5-scaled.jpg"/>
        <div className="listingDesc">
            <span>
                <img className="icon" src="./images/location-pin-svgrepo-com.svg"/>
                <h6>700m away</h6>
            </span>
            <h4>Irving K Barber Building</h4>
            <p>The Irving K. Barber Learning Centre is a facility at the Vancouver campus of the University of British Columbia. The learning centre...</p>
            <button className="listingButton">
                <h6>Check availability</h6>
                <img className="icon" src="./images/arrow-right-svgrepo-com.svg"/>
            </button>
        </div>
    </div>
  );
}