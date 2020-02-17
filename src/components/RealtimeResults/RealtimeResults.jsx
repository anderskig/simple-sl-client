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
  const [showDestination, setShowDestination] = useState(false);
  const [showCantCatch, setShowCantCatch] = useState(false);

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
          <div className="RealtimeResults__option">
            <label htmlFor="hideToCloseInTime">Visa avgångar jag inte hinner till&nbsp;</label>
            <input id="hideToCloseInTime" type="checkbox" onChange={(event) => setShowCantCatch(event.target.checked)}></input>
          </div>
          <div className="RealtimeResults__option">
            <label htmlFor="showDestination">Visa linjedestination&nbsp;</label>
            <input id="showDestination" type="checkbox" onChange={(event) => setShowDestination(event.target.checked)}></input>
          </div>
        </div>
      </ContentBox>
      <div className="RealtimeResults__boxes">
        {sites.map((site, index) => (
          <RealtimeResult index={index} showCantCatch={showCantCatch} showDestination={showDestination} key={index} site={site} timeWindow={timeWindow}></RealtimeResult>
        ))}
      </div>
    </div>
  );
}

export default RealtimeResults;
