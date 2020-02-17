import React, { useState } from 'react';
import RealtimeResult from './RealtimeResult/RealtimeResult';
import ContentBox from '../ContentBox/ContentBox';
import './RealtimeResults.css';

const sites = [
  {name: 'Ekuddsvägen', siteId: 4042},
  {name: 'Finntorp', siteId: 4046},
  {name: 'Saltsjö-Järla', siteId: 9429}
];

function RealtimeResults() {
  const [timeWindow, setTimeWindow] = useState(30);

  return (
    <div className="RealtimeResults">
      <ContentBox>
        <div className="RealtimeResults__options">
          <div className="RealtimeResults__option">Avgångar inom&nbsp;
            <select onChange={(event) => setTimeWindow(event.target.value)}>
              <option value="30">30 minuter</option>
              <option value="60">60 minuter</option>
            </select>
          </div>
          <div className="RealtimeResults__option">Dölj avgångar jag inte hinner till&nbsp;
            <input type="checkbox"></input>
          </div>
        </div>
      </ContentBox>
      <div className="RealtimeResults__boxes">
        {sites.map((site, index) => (
          <RealtimeResult key={index} site={site} timeWindow={timeWindow}></RealtimeResult>
        ))}
      </div>
    </div>
  );
}

export default RealtimeResults;
