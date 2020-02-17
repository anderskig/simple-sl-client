import React, { useState, useEffect } from 'react';
import axios  from 'axios';
import DeparturesList from '../../DepartureList/DepartureList';
import ContentBox from '../../ContentBox/ContentBox';

function getDirection(line) {
  // Some lines have opposite journey direction compared to other lines at same sites for some reason
  const switchDirection = ['821'];

  if (switchDirection.includes(line.LineNumber)) {
    if (line.JourneyDirection === 1) {
      return 2;
    } else if (line.JourneyDirection === 2) {
      return 1;
    }
  }
  return line.JourneyDirection;
}

function RealtimeResult(props) {
  const { site, timeWindow, showDestination, showCantCatch, index } = props;
  const [realtimeResult, setRealtimeResult] = useState({Buses: [], Trams: []});
  const [timeToWalk, setTimeToWalk] = useState(0);
  const apiUrl = 'http://localhost:9000/';
  const apiPath = 'nextDeparture/';

  const handleSetTimeToWalk = (value) => {
    const intValue = parseInt(value,10);
    if (intValue < 0 || isNaN(intValue)) {
      setTimeToWalk(0);
    } else {
      setTimeToWalk(intValue);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        apiUrl + apiPath + site.siteId + '?timewindow=' + timeWindow
      );
      setRealtimeResult(result.data);
    }
    fetchData();
  },[site.siteId, timeWindow]);

  const departures = realtimeResult.Buses.concat(realtimeResult.Trams);
  return (
    <ContentBox>
      <div className="RealtimeResult">
        <h2>{site.name}</h2>
        <div className="RealtimeResult__options">
          <label htmlFor={'timeToWalk' + index}>Tid att gå&nbsp;</label>
          <input step="1" pattern="\d+" value={timeToWalk} id={'timeToWalk' + index} type="number" onChange={(event) => handleSetTimeToWalk(event.target.value)}></input>
          &nbsp;minuter
        </div>
        <h3>Mot stan</h3>
          <DeparturesList showCantCatch={showCantCatch} timeToWalk={timeToWalk} showDestination={showDestination} list={departures.filter(line => getDirection(line) === 2)}></DeparturesList>
        <h3>Mot Nacka</h3>
          <DeparturesList showCantCatch={showCantCatch} timeToWalk={timeToWalk} showDestination={showDestination} list={departures.filter(line => getDirection(line) === 1)}></DeparturesList>
      </div>
    </ContentBox>
  );
}

export default RealtimeResult;
