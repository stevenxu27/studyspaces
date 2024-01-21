import React from 'react';
import { useNavigate } from 'react-router-dom';


const ListingComponent = (props)=> {
  const navigate = useNavigate();

  const handleViewBuildingClick = () => {
      navigate('/view-building');
  };

  return (
    <div className="listingComponent">
        <img className="listingComponentImg" src={props.img}/>
        <div className="listingDesc">
            <span className="locationDesc">
                <img className="icon" src="./images/location-pin-svgrepo-com.svg"/>
                <h6>{props.distance}</h6>
            </span>
            <h4>{props.name}</h4>
            <p>{props.desc}</p>
            <button className="listingButton" onClick={handleViewBuildingClick}>
                <h6>Check availability</h6>
                <img className="icon" src="./images/arrow-right-svgrepo-com.svg"/>
            </button>
        </div>
    </div>
  );
}

export default ListingComponent;