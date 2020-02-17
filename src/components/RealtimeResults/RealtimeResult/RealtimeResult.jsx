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
  const { site, timeWindow } = props;
  const [realtimeResult, setRealtimeResult] = useState({name: site.name, result: {Buses: [], Trams: []}});
  const apiUrl = 'http://localhost:9000/';
  const apiPath = 'nextDeparture/';

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        apiUrl + apiPath + site.siteId + '?timewindow=' + timeWindow
      );
      setRealtimeResult({
        name: site.name,
        result: result.data
      });
    }
    fetchData();
  },[site.siteId, site.name, timeWindow]);

  const {name, result} = realtimeResult;
  const departures = result.Buses.concat(result.Trams);
  return (
    <ContentBox>
      <div className="RealtimeResult">
        <h2>{name}</h2>
        <h3>Mot stan</h3>
          <DeparturesList list={departures.filter(line => getDirection(line) === 2)}></DeparturesList>
        <h3>Mot Nacka</h3>
          <DeparturesList list={departures.filter(line => getDirection(line) === 1)}></DeparturesList>
      </div>
    </ContentBox>
  );
}

export default RealtimeResult;
