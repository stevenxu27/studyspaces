import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import TableComponent from "./components/DataTable";
import VenueMap from "./components/VenueMap.jsx";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <TableComponent />
    <VenueMap />
  </React.StrictMode>,
  document.getElementById("root")
);
