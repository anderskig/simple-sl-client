import React, { useState } from 'react';
import RealtimeResult from './RealtimeResult/RealtimeResult';

const sites = [
  {name: 'Ekuddsvägen', siteId: 4042},
  {name: 'Finntorp', siteId: 4046},
  {name: 'Saltsjö-Järla', siteId: 9429}
];

function RealtimeResults() {
  const [timeWindow, setTimeWindow] = useState(30);

  return (
    <div>
      <p>Avgångar inom&nbsp;
        <select onChange={(event) => setTimeWindow(event.target.value)}>
          <option value="30">30 minuter</option>
          <option value="60">60 minuter</option>
        </select></p>
      {sites.map((site, index) => (
        <RealtimeResult key={index} site={site} timeWindow={timeWindow}></RealtimeResult>
      ))}
    </div>
  );
}

export default RealtimeResults;
