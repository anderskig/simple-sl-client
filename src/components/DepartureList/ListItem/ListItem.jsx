import React from 'react';
import MaterialListItem from '@material-ui/core/ListItem';
import {
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Avatar,
  Typography,
} from '@material-ui/core';

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

function ListItem(props) {
  const { departure } = props;
  return (
    <MaterialListItem>
      <ListItemAvatar>
        <Avatar style={{ backgroundColor: getColor(departure.TransportMode) }}>
          <i className={'fad fa-' + getIconSuffix(departure.TransportMode)}></i>
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={departure.LineNumber}
        secondary={departure.Destination}
      />
      <ListItemSecondaryAction>
        <Typography variant="h6">{departure.DisplayTime}</Typography>
      </ListItemSecondaryAction>
    </MaterialListItem>
  );
}

export default ListItem;
