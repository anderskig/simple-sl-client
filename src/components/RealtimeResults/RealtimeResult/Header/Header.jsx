import React from 'react';
import { Typography, TextField, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  textField: {
    width: 145,
  },
});

function Header(props) {
  const classes = useStyles();
  const { handleSetTimeToWalk, index, timeToWalk, site } = props;
  return (
    <div className="RealtimeResult__Header">
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
    </div>
  );
}

export default Header;
