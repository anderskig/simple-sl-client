import React from 'react';
import './ContentBox.css';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    minWidth: '240px',
  },
}));

function ContentBox(props) {
  const classes = useStyles();
  return <Card className={classes.root}>{props.children}</Card>;
}

export default ContentBox;
