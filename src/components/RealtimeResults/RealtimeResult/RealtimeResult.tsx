import React, { useState, useEffect, FunctionComponent } from 'react';
import axios from 'axios';
import DeparturesList, { Departure } from '../../DepartureList/DepartureList';
import ContentBox from '../../ContentBox/ContentBox';
import { setStorageTimeToWalk, Site } from '../../../storage/storage';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header/Header';

const useStyles = makeStyles(theme => ({
  listTitle: {
    padding: '0 ' + theme.spacing(2) + 'px',
  },
}));

function getDirection(departure: Departure) {
  // Some lines have opposite journey direction compared to other lines at same sites for some reason
  const switchDirection = ['821'];

  if (switchDirection.includes(departure.LineNumber)) {
    if (departure.JourneyDirection === 1) {
      return 2;
    } else if (departure.JourneyDirection === 2) {
      return 1;
    }
  }
  return departure.JourneyDirection;
}

interface RealtimeResultProps {
  site: Site;
  timeWindow: number;
  showCantCatch: boolean;
}

const RealtimeResult: FunctionComponent<RealtimeResultProps> = props => {
  const classes = useStyles();
  const { site, timeWindow, showCantCatch } = props;
  const [realtimeResult, setRealtimeResult] = useState({
    Buses: [],
    Trams: [],
  });
  const [timeToWalk, setTimeToWalk] = useState(site.timeToWalk);
  const apiUrl = 'https://sl-api-wrapper.herokuapp.com/';
  const apiPath = 'nextDeparture/';

  const handleSetTimeToWalk = (value: string) => {
    const intValue = parseInt(value, 10);
    const valueToSet = intValue < 0 || isNaN(intValue) ? 0 : intValue;
    setTimeToWalk(valueToSet);
    setStorageTimeToWalk(valueToSet, site.siteId);
  };

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        apiUrl + apiPath + site.siteId + '?timewindow=' + timeWindow,
      );
      setRealtimeResult(result.data);
    }
    fetchData();
  }, [site.siteId, timeWindow]);

  const departures = realtimeResult.Buses.concat(
    realtimeResult.Trams,
  ) as Departure[];
  return (
    <ContentBox>
      <div className="RealtimeResult">
        <Header
          site={site}
          handleSetTimeToWalk={handleSetTimeToWalk}
          timeToWalk={timeToWalk}
        />
        <Typography className={classes.listTitle} variant="h6">
          Mot stan
        </Typography>
        <DeparturesList
          showCantCatch={showCantCatch}
          timeToWalk={timeToWalk}
          list={departures.filter(line => getDirection(line) === 2)}
        ></DeparturesList>
        <Typography className={classes.listTitle} variant="h6">
          Mot Nacka
        </Typography>
        <DeparturesList
          showCantCatch={showCantCatch}
          timeToWalk={timeToWalk}
          list={departures.filter(line => getDirection(line) === 1)}
        ></DeparturesList>
      </div>
    </ContentBox>
  );
};

export default RealtimeResult;
