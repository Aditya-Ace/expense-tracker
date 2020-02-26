import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { GlobalContext } from "../context/GlobalState";
const useStyles = makeStyles(theme => ({
  balance: {
    ...theme.typography.header,
    color: theme.palette.common.secondaryColor,
    margin: "0 auto",
    fontSize: "1.5rem"
  },
  headerContainer: {
    marginTop: "3em"
  }
}));
function Balance() {
  const context = useContext(GlobalContext);
  const { transactions } = context;
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
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
        <Typography variant="h2" className={classes.balance}>
          Balance
        </Typography>
        <hr />
        <Typography variant="h1" className={classes.balance}>
          Rs. {total}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Balance;
