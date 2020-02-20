import React from 'react';
import ContentBox from '../../ContentBox/ContentBox';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  ListItem,
  List,
  ListItemText,
  ListItemSecondaryAction,
  Select,
  MenuItem,
  Switch,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: 0,
    fontSize: theme.typography.pxToRem(10),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  headingIcon: {
    fontSize: theme.typography.pxToRem(16),
    marginRight: theme.spacing(1),
  },
}));

function Options(props) {
  const { timeWindow, setTimeWindow, showCantCatch, setShowCantCatch } = props;
  const classes = useStyles();
  return (
    <ContentBox>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<i className="fad fa-chevron-down"></i>}
          aria-controls="settings-content"
          id="settings-header"
        >
          <Typography className={classes.heading}>
            <i className={'fad fa-cog ' + classes.headingIcon}></i>Inställningar
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List className={classes.root}>
            <ListItem className={classes.listItem}>
              <ListItemText primary={'Visa avgångar inom:'} />
              <ListItemSecondaryAction>
                <Select
                  value={timeWindow}
                  onChange={event => setTimeWindow(event.target.value)}
                >
                  <MenuItem value="30">30 minuter</MenuItem>
                  <MenuItem value="60">60 minuter</MenuItem>
                </Select>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText primary={'Visa avgångar jag inte hinner till:'} />
              <ListItemSecondaryAction>
                <Switch
                  edge="end"
                  checked={showCantCatch}
                  onChange={event => setShowCantCatch(event.target.checked)}
                  // value="checkedA"
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {/* <div className="RealtimeResults__option">Avgångar inom&nbsp;</div>
      <div className="RealtimeResults__option">
        <label htmlFor="hideToCloseInTime">
          Visa avgångar jag inte hinner till&nbsp;
        </label>
        <input
          id="hideToCloseInTime"
          type="checkbox"
          onChange={event => setShowCantCatch(event.target.checked)}
        ></input>
      </div> */}
    </ContentBox>
  );
}

export default Options;
