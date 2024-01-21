import React from 'react';

const SavedSpotComponent = (props) => {
    return (
        <span className="savedSpot">
            <span>
                <img className="icon" src="./images/location-pin-svgrepo-com.svg" />
                <h6>{props.distance}</h6>
            </span>
            <h6>{props.name}</h6>
            <img className="icon" src="./images/arrow-next-small-svgrepo-com.svg"/>
        </span>
    );
};

export default SavedSpotComponent;
