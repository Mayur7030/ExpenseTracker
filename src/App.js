import React from "react";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import "./App.css";
import IncomeExpenses from "./Components/IncomeExpenses";
import TransactionList from "./Components/TransactionList";
import AddTransaction from "./Components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <div>
          <div className="container">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </div>
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
