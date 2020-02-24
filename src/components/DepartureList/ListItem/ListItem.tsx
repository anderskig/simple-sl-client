import React, { FunctionComponent } from 'react';
import MaterialListItem from '@material-ui/core/ListItem';
import {
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Avatar,
  Typography,
  LinearProgress,
} from '@material-ui/core';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Departure } from '../DepartureList';

const useStyles = makeStyles(theme => ({
  secondary: {
    marginRight: 80,
  },
  departureTime: {
    color: 'rgba(0, 0, 0, 0.54)',
    textAlign: 'right',
    display: 'inline-block',
    width: '100%',
  },
}));

function getIconSuffix(transportMode: string) {
  if (transportMode === 'BUS') {
    return 'bus-alt';
  } else if (transportMode === 'TRAM') {
    return 'subway';
  } else if (transportMode === 'TRAIN') {
    return 'train';
  }
}

function getColor(transportMode: string) {
  if (transportMode === 'BUS') {
    return '#b22222';
  } else if (transportMode === 'TRAM') {
    return '#4169e1';
  } else if (transportMode === 'TRAIN') {
    return 'yellow'; //fix;
  }
}

function leaveString(minutes: number) {
  if (minutes === 0) {
    return 'Gå nu!';
  } else {
    return 'Gå om ' + minutes + ' min';
  }
}

const ColorLinearProgress = withStyles({
  root: {
    height: 30,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: '#ccc',
  },
  barColorPrimary: {
    backgroundColor: '#bdbdbd',
  },
})(LinearProgress);

interface ListItemProps {
  departure: Departure | null;
  timeToWalk?: number;
}

const ListItem: FunctionComponent<ListItemProps> = ({
  departure,
  timeToWalk,
}) => {
  const classes = useStyles();
  if (departure === null) {
    return (
      <MaterialListItem>
        <ListItemAvatar>
          <Avatar>
            <i className={'fad fa-' + getIconSuffix('BUS')}></i>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={<ColorLinearProgress variant="query" />} />
      </MaterialListItem>
    );
  }
  const checkedTimeToWalk = typeof timeToWalk === 'undefined' ? 0 : timeToWalk;
  return (
    <MaterialListItem>
      <ListItemAvatar>
        <Avatar style={{ backgroundColor: getColor(departure.TransportMode) }}>
          <i className={'fad fa-' + getIconSuffix(departure.TransportMode)}></i>
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        classes={{
          secondary: classes.secondary,
        }}
        primary={departure.LineNumber}
        secondary={departure.Destination}
      />
      <ListItemSecondaryAction>
        <Typography variant="body1">
          <b>{leaveString(departure.MinutesToDeparture - checkedTimeToWalk)}</b>
        </Typography>
        <Typography className={classes.departureTime} variant="body2">
          {departure.DisplayTime}
        </Typography>
      </ListItemSecondaryAction>
    </MaterialListItem>
  );
};

export default ListItem;
