import React, { useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { GlobalContext } from "../context/GlobalState";
const useStyles = makeStyles(theme => ({
  addtransConatiner: {
    marginTop: "2em",
    padding: "2em"
  },
  addtrans: {
    ...theme.typography.header,
    color: theme.palette.common.secondaryColor,
    fontSize: "1.5em"
  },
  gridItemTrans: {
    padding: "1em"
  }
}));

const AddTransaction = () => {
  const context = useContext(GlobalContext);
  const { addTransaction } = context;
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const handleSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: parseInt(amount)
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.addtransConatiner}
    >
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid item className={classes.gridItemTrans}>
          <Typography variant="h3" className={classes.addtrans}>
            Add Transaction
          </Typography>
        </Grid>
        <Grid item className={classes.gridItemTrans}>
          <TextField
            id="standard-basic"
            label="Transaction Details"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </Grid>
        <Grid item className={classes.gridItemTrans}>
          <TextField
            id="standard-basic"
            label="Transaction Amount"
            value={amount}
            type="number"
            onChange={e => setAmount(e.target.value)}
          />
        </Grid>
        <Grid item className={classes.gridItemTrans}>
          <Button type="submit" variant="contained" color="primary">
            Add Transaction
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default AddTransaction;
