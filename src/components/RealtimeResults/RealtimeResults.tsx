import React, { useState } from 'react';
import RealtimeResult from './RealtimeResult/RealtimeResult';
import { getSites } from '../../storage/storage';
import { Grid } from '@material-ui/core';
import Options from './Options/Options';

function RealtimeResults() {
  const [timeWindow, setTimeWindow] = useState(30);
  const [showCantCatch, setShowCantCatch] = useState(false);

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Options
          timeWindow={timeWindow}
          setTimeWindow={setTimeWindow}
          setShowCantCatch={setShowCantCatch}
          showCantCatch={showCantCatch}
        />
      </Grid>
      {getSites().map((site, index) => (
        <Grid key={index} item xs={12} md="auto">
          <RealtimeResult
            showCantCatch={showCantCatch}
            site={site}
            timeWindow={timeWindow}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default RealtimeResults;
