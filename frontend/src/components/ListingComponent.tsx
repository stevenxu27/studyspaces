import React from 'react';

export default function ListingComponent(props) {
  return (
    <div className="listingComponent">
        <img src={props.img}/>
        <div className="listingDesc">
            <span>
                <img className="icon" src="./images/location-pin-svgrepo-com.svg"/>
                <h6>{props.distance}</h6>
            </span>
            <h4>{props.name}</h4>
            <p>{props.desc}</p>
            <button className="listingButton">
                <h6>Check availability</h6>
                <img className="icon" src="./images/arrow-right-svgrepo-com.svg"/>
            </button>
        </div>
    </div>
  );
}