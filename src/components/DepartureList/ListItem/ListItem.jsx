import React from 'react';
import MaterialListItem from '@material-ui/core/ListItem';
import {
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Avatar,
  Typography,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  secondary: {
    marginRight: 80,
  },
}));

function getIconSuffix(transportMode) {
  if (transportMode === 'BUS') {
    return 'bus-alt';
  } else if (transportMode === 'TRAM') {
    return 'subway';
  } else if (transportMode === 'TRAIN') {
    return 'train';
  }
}

function getColor(transportMode) {
  if (transportMode === 'BUS') {
    return '#b22222';
  } else if (transportMode === 'TRAM') {
    return '#4169e1';
  } else if (transportMode === 'TRAIN') {
    return 'yellow'; //fix;
  }
}

function leaveString(minutes) {
  if (minutes === 0) {
    return 'Gå nu!';
  } else {
    return 'Gå om ' + minutes + ' min';
  }
}

function ListItem(props) {
  const { departure, timeToWalk } = props;
  const classes = useStyles();
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
          <b>{leaveString(departure.MinutesToDeparture - timeToWalk)}</b>
        </Typography>
      </ListItemSecondaryAction>
    </MaterialListItem>
  );
}

export default ListItem;
