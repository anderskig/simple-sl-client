import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeparturesList from '../../DepartureList/DepartureList';
import ContentBox from '../../ContentBox/ContentBox';
import { setStorageTimeToWalk } from '../../../storage/storage';
import { Typography, TextField, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import './RealtimeResult.css';

const useStyles = makeStyles({
  textField: {
    width: 145,
  },
});

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
  const [realtimeResult, setRealtimeResult] = useState({
    Buses: [],
    Trams: [],
  });
  const [timeToWalk, setTimeToWalk] = useState(site.timeToWalk);
  const apiUrl = 'http://localhost:9000/';
  const apiPath = 'nextDeparture/';

  const handleSetTimeToWalk = value => {
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

  const departures = realtimeResult.Buses.concat(realtimeResult.Trams);
  const classes = useStyles();
  return (
    <ContentBox>
      <div className="RealtimeResult">
        <Typography variant="h4">{site.name}</Typography>
        <div className="RealtimeResult__options">
          <TextField
            className={classes.textField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <i class="fas fa-walking"></i>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">minuter</InputAdornment>
              ),
              inputProps: { step: '1', pattern: 'd+\\' },
            }}
            type="number"
            label="Tid att gå"
            id={'timeToWalk' + index}
            value={timeToWalk}
            variant="outlined"
            size="small"
            onChange={event => handleSetTimeToWalk(event.target.value)}
          />
        </div>

        <Typography variant="h6">Mot stan</Typography>
        <DeparturesList
          showCantCatch={showCantCatch}
          timeToWalk={timeToWalk}
          showDestination={showDestination}
          list={departures.filter(line => getDirection(line) === 2)}
        ></DeparturesList>
        <Typography variant="h6">Mot Nacka</Typography>
        <DeparturesList
          showCantCatch={showCantCatch}
          timeToWalk={timeToWalk}
          showDestination={showDestination}
          list={departures.filter(line => getDirection(line) === 1)}
        ></DeparturesList>
      </div>
    </ContentBox>
  );
}

export default RealtimeResult;
