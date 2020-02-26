import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./components/Theme";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
