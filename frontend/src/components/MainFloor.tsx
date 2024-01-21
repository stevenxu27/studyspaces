import React from 'react';

export default function MainFloor() {
  return (
    <div id="mainFloor">
      <span class="mainSpan">
          <img className="icon" src="./images/arrow-prev-svgrepo-com.svg"/>
          <p>Irving K Barber Building</p>
          <div className="darkShade"/>
      </span>
      <div id="mappedInEmbed">
      </div>
      <div id="infoContainer">
        <div className="infoContainerLeft">
          <img className="infoContainerLeftImg" src="./images/UBC_Irving_5-scaled.jpg"/>
          <img className="infoContainerBottomSection" src="./images/viewBuildings/times.png"/>
        </div>
        <div className="infoContainerRight">
          <div className="infoDescription">
            <div className="locationDesc">
                <img className="icon" src="./images/location-pin-svgrepo-com.svg"/>
                <h6>700m</h6>
            </div>
            <h3>Irving K Barber</h3>
            <p>The Irving K. Barber Learning Centre is a facility at the Vancouver campus of the University of British Columbia. The learning centre...</p>
          </div>
        </div>
        
        </div>
    </div>
  );
}
