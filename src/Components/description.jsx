import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PaperSheet(props) {
  const classes = useStyles();

  return (
    <div>
              <Grid justify="center" container spacing={3}>
        <Grid item  xs={12} sm={10} md={10} lg={11}>
        <Paper className={classes.root} style={props.style}>
 {props.children}
 
       </Paper>
        </Grid>

      </Grid>
    
    </div>
  );
}