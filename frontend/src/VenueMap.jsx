import React, { useState, useEffect } from 'react';
import { getTables } from "../services/spacesService";
import {
  getVenueMaker,
  showVenue,
  E_SDK_EVENT,
} from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/mappedin.css";

const MappedinComponent = () => {
  const options = {
    mapId: "65a8575104c23e7916b1d041",
    key: "65ac85d1ca641a9a1399dc61",
    secret: "8c49f2d41e935b977cecd7ca95290055fa68b582d41b4dee4644d4a83f3cef48",
  };

  const [fullData, setFullData] = useState([]);

  const getData = async () => {
    try {
      const result = await getTables();
      setFullData(result);
      console.log(fullData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        const venue = await getVenueMaker(options);
        const mapView = await showVenue(document.getElementById("mappedin-map"), venue);
        mapView.FloatingLabels.labelAllLocations({ interactive: true });
        mapView.addInteractivePolygonsForAllLocations();
        const venueLabels = venue.polygons.map((polygon) => {
          return polygon.externalId ? polygon.externalId : null;
        });
        console.log(venueLabels)

        const fullTableIds = fullData.map((table) => {
          if (table.is_full) {
            return table.table_id ? table.table_id : null;
          }
        });

        console.log(fullTableIds)

        venue.polygons.map((polygon) => {
          if (fullTableIds.includes(polygon.externalId)){
            mapView.setPolygonColor(polygon, "#BF4320");
            console.log("bruh")
          }          
        });

        
        mapView.on(E_SDK_EVENT.CLICK, ({ polygons }) => {
          if (polygons.length > 0) {
            mapView.setPolygonColor(polygons[0], "#BF4320");
          } else {
            mapView.clearAllPolygonColors();
          }
        });

        console.log(fullData);

      } catch (error) {
        console.error('Error initializing Mappedin:', error);
      }
    };

    init();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleFetchData = () => {
    // Call the getData function to fetch data when the button is clicked
    getData();
  };

  return (
    <div>
      <div id="mappedin-map" style={{ width: '100%', height: '500px' }}>
        {/* The map will be rendered inside this div */}
      </div>
      <button onClick={handleFetchData}>Fetch Data</button>
    </div>
  );
};

export default MappedinComponent;