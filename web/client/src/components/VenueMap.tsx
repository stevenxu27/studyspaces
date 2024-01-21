import React, { useEffect } from 'react';
import {
  getVenueMaker,
  showVenue,
  TGetVenueMakerOptions,
  E_SDK_EVENT,
} from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/mappedin.css";

const MappedinComponent = () => {
  const options: TGetVenueMakerOptions = {
    mapId: "65a8575104c23e7916b1d041",
    key: "65ac85d1ca641a9a1399dc61",
    secret: "8c49f2d41e935b977cecd7ca95290055fa68b582d41b4dee4644d4a83f3cef48",
  };

  useEffect(() => {
    const init = async () => {
      try {
        const venue = await getVenueMaker(options);
        const mapView = await showVenue(document.getElementById("mappedin-map")!, venue);

        mapView.addInteractivePolygonsForAllLocations();
        mapView.on(E_SDK_EVENT.CLICK, ({ polygons }) => {
          if (polygons.length > 0) {
            mapView.setPolygonColor(polygons[0], "#BF4320");
          } else {
            mapView.clearAllPolygonColors();
            mapView.setBackgroundColor("#49FF33");
          }
        });
      } catch (error) {
        console.error('Error initializing Mappedin:', error);
      }
    };

    init();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div id="mappedin-map" style={{ width: '100%', height: '500px' }}>
      {/* The map will be rendered inside this div */}
    </div>
  );
};

export default MappedinComponent;