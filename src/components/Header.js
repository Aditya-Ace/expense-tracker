import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  header: {
    ...theme.typography.header,
    color: theme.palette.common.primeColor,
    margin: "0 auto"
  },
  headerContainer: {
    marginTop: "3em"
  }
}));

const Header = props => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="flex-end"
      alignItems="center"
      className={classes.headerContainer}
    >
      <Grid item>
        <Typography variant="h2" className={classes.header}>
          Expenses Tracker
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
