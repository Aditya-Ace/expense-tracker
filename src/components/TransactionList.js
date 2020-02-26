import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { GlobalContext } from "../context/GlobalState";

const useStyles = makeStyles(theme => ({
  transactionListContainer: {
    marginTop: "2em",
    textAlign: "center"
  },
  history: {
    ...theme.typography.header,
    color: theme.palette.common.secondaryColor,
    margin: "0 auto"
  },
  transaction: {
    ...theme.typography.header,
    color: theme.palette.common.secondaryColor,
    fontSize: "1em"
  },
  transCard: {
    width: "25em",
    height: "2em",
    padding: "1em"
  },
  btn: {
    fontSize: "0.8em",
    margin: "0em -6em 0em -3em"
  },
  expense: {
    ...theme.expense
  },
  income: {
    ...theme.income
  }
}));
const TransactionList = () => {
  const context = useContext(GlobalContext);
  const { transactions, deleteTransaction } = context;

  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      direction="column"
      alignItems="center"
      className={classes.transactionListContainer}
      spacing={2}
    >
      <Grid item>
        <Typography className={classes.history} variant="h3">
          History
        </Typography>
        <hr />
      </Grid>
      {transactions.map(transaction => (
        <Grid key={transaction.id} item>
          <Card className={classes.transCard}>
            <Grid container justify="center" alignItems="center" spacing={2}>
              <Grid item sm={4}>
                <Typography className={classes.transaction} variant="h3">
                  {transaction.text}
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography className={classes.transaction} variant="h3">
                  {transaction.amount > 0 ? "+" : "-"}$
                  {Math.abs(transaction.amount)}
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => deleteTransaction(transaction.id)}
                >
                  X
                </Button>
              </Grid>
            </Grid>
            <div
              className={
                transaction.amount < 0 ? classes.expense : classes.income
              }
            ></div>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TransactionList;
