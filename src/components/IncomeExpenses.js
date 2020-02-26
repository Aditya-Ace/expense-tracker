import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { GlobalContext } from "../context/GlobalState";
const useStyle = makeStyles(theme => ({
  card: {
    ...theme.typography.header,
    color: theme.palette.common.secondaryColor,
    width: "5em"
  },
  cardContainer: {
    marginTop: "2em",
    textAlign: "center"
  },
  income: {
    color: "green",
    fontSize: "1.5em"
  },
  expenses: {
    color: theme.palette.common.primeColor,
    fontSize: "1.5em"
  }
}));

const IncomeExpenses = () => {
  const context = useContext(GlobalContext);
  const { transactions } = context;
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  const classes = useStyle();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.cardContainer}
      spacing={2}
    >
      <Grid item>
        <Card>
          <Typography variant="h2" className={classes.card}>
            Income
          </Typography>
          <Typography variant="subtitle1" className={classes.income}>
            {income}
          </Typography>
        </Card>
      </Grid>
      <Grid item>
        <Card>
          <Typography variant="h2" className={classes.card}>
            Expenses
          </Typography>
          <Typography variant="subtitle1" className={classes.expenses}>
            {expense}
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default IncomeExpenses;
