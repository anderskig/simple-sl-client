import React, { FunctionComponent } from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    minWidth: '240px',
  },
}));

const ContentBox: FunctionComponent<{}> = ({ children }) => {
  const classes = useStyles();
  return <Card className={classes.root}>{children}</Card>;
};

export default ContentBox;
