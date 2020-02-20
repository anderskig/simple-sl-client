import React from 'react';
// import './DepartureList.css';
import moment from 'moment';
import ListItem from './ListItem/ListItem';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

export const isNotRealtime = displayTime => displayTime.includes(':');
export const isNow = displayTime => displayTime === 'Nu';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
  },
}));

function timeToDeparture(displayTime) {
  if (isNotRealtime(displayTime)) {
    const departureTime = moment(displayTime, 'HH:mm');
    const now = moment();
    const diff = departureTime.diff(now, 'minutes');
    return diff;
  }
  if (isNow(displayTime)) {
    return 0;
  }
  return displayTime.split(' ')[0];
}

function canCatch(departure, timeToWalk) {
  const minutesToDeparture = timeToDeparture(departure.DisplayTime);
  if (isNaN(timeToWalk)) {
    return true;
  }
  return minutesToDeparture - timeToWalk >= 0;
}

function DepartureList(props) {
  const classes = useStyles();
  const { showDestination, showCantCatch, list, timeToWalk } = props;
  const canCatchList = showCantCatch
    ? list
    : list.filter(departure => canCatch(departure, timeToWalk));
  const sortedList = canCatchList.sort(
    (a, b) => timeToDeparture(a.DisplayTime) - timeToDeparture(b.DisplayTime),
  );
  return (
    <List className={classes.root}>
      {sortedList.map((departure, index) => (
        <ListItem
          key={index}
          departure={departure}
          showDestination={showDestination}
        ></ListItem>
      ))}
    </List>
  );
}

export default DepartureList;
