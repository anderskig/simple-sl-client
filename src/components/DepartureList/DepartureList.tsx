import React, { FunctionComponent } from 'react';
import moment from 'moment';
import ListItem from './ListItem/ListItem';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

export const isNotRealtime = (displayTime: string) => displayTime.includes(':');
export const isNow = (displayTime: string) => displayTime === 'Nu';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
  },
}));

function timeToDeparture(displayTime: string): number {
  if (isNotRealtime(displayTime)) {
    const departureTime = moment(displayTime, 'HH:mm');
    const now = moment();
    const diff = departureTime.diff(now, 'minutes');
    return diff;
  }
  if (isNow(displayTime)) {
    return 0;
  }
  return parseInt(displayTime.split(' ')[0], 10);
}

function canCatch(departure: Departure, timeToWalk: number): boolean {
  if (isNaN(timeToWalk)) {
    return true;
  }
  return departure.MinutesToDeparture - timeToWalk >= 0;
}

export interface Departure {
  TransportMode: string;
  LineNumber: string;
  JourneyDirection: number;
  Destination: string;
  MinutesToDeparture: number;
  DisplayTime: string;
}

interface DepartureListProps {
  showCantCatch: boolean;
  list: Array<Departure>;
  timeToWalk: number;
}

const DepartureList: FunctionComponent<DepartureListProps> = props => {
  const classes = useStyles();
  const { showCantCatch, list, timeToWalk } = props;
  const listWithTTD = list.map(departure => {
    departure.MinutesToDeparture = timeToDeparture(departure.DisplayTime);
    return departure;
  });
  const canCatchList = showCantCatch
    ? listWithTTD
    : listWithTTD.filter(departure => canCatch(departure, timeToWalk));
  const sortedList = canCatchList.sort(
    (a, b) => a.MinutesToDeparture - b.MinutesToDeparture,
  );
  return (
    <List className={classes.root}>
      {sortedList.map((departure, index) => (
        <ListItem
          timeToWalk={timeToWalk}
          key={index}
          departure={departure}
        ></ListItem>
      ))}
    </List>
  );
};

export default DepartureList;
