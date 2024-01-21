import React, { useState, useEffect } from 'react';

import { getTables } from "../services/spacesService";

const TableComponent = () => {
  const [tableData, setTableData] = useState([]);

  const getData = async () => {
    const result = await getTables();
    setTableData(result);
  };

  useEffect(() => {
    getData();
  }, []); // Fetch data on component mount

  return (
    <div>
      <h2>Table Data</h2>
      <button onClick={ getData }>Fetch Data</button>
        <table>
          <thead>
            <tr>
              <th>_id</th>
              <th>last_updated</th>
              <th>last_occupied</th>
              <th>table_id</th>
              <th>location</th>
              <th>battery</th>
              <th>popularity</th>
              <th>total_users</th>
              <th>is_full</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(table => (
              <tr key={table._id}>
                <td>{table._id}</td>
                <td>{table.last_updated}</td>
                <td>{table.last_occupied}</td>
                <td>{table.table_id}</td>
                <td>{table.location}</td>
                <td>{table.battery}</td>
                <td>{table.popularity}</td>
                <td>{table.total_users}</td>
                <td>{table.is_full.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default TableComponent;