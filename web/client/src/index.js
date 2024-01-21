import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import TableComponent from "./components/DataTable";
import App from "./App";
import VenueMap from "./components/VenueMap.tsx";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <TableComponent />
    {/* <VenueMap /> */}
    <VenueMap />
  </React.StrictMode>,
  document.getElementById("root")
);
