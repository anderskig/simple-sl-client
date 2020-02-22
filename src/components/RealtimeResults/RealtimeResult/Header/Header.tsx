import React, { FunctionComponent } from 'react';
import { Typography, TextField, InputAdornment, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Site } from '../../../../storage/storage';

const useStyles = makeStyles(theme => {
  return {
    box: {
      padding: theme.spacing(2),
    },
    textField: {
      width: 145,
      margin: '8px 0',
    },
  };
});

interface HeaderProps {
  handleSetTimeToWalk: Function;
  timeToWalk: number;
  site: Site;
}

const Header: FunctionComponent<HeaderProps> = props => {
  const classes = useStyles();
  const { handleSetTimeToWalk, timeToWalk, site } = props;
  return (
    <Box className={classes.box} component="div">
      <Typography variant="h4">{site.name}</Typography>
      <TextField
        className={classes.textField}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <i className="fas fa-walking"></i>
            </InputAdornment>
          ),
          endAdornment: <InputAdornment position="end">minuter</InputAdornment>,
          inputProps: { step: '1', pattern: 'd+\\' },
        }}
        type="number"
        label="Tid att gå"
        id={'timeToWalk' + site.siteId}
        value={timeToWalk}
        variant="outlined"
        size="small"
        onChange={event => handleSetTimeToWalk(event.target.value)}
      />
    </Box>
  );
};

export default Header;
