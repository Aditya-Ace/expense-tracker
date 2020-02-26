import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Intial State
const InitialState = {
  transactions: []
};

//Create Context
export const GlobalContext = createContext(InitialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);
  //Delete Transaction
  const deleteTransaction = id => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  };
  const addTransaction = transactionData => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transactionData
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
