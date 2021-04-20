import React, { createContext, useReducer } from "react";
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{ "amount": 15, "category": "Bills", "type": "Expense", "date": "2021-04-20", "id": "b62d4e8a-c3cb-4a22-91d6-e998a8bacc7c" }, { "amount": 100, "category": "Investments", "type": "Income", "date": "2021-04-20", "id": "ad8d676e-823a-4bfd-bbb2-576003928953" }, { "amount": 50, "category": "Business", "type": "Income", "date": "2021-04-19", "id": "2703ccf8-b0a5-4016-b53d-c869eb53885d" }];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);
    console.log(transactions);

    const deleteTransactions = (id) => {
        dispatch({ type: 'DELETE_TRANSACTIONS', payload: id });
    }

    const addTransactions = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTIONS', payload: transaction });
    }

    const balance = transactions.reduce((acc, currVal) => {
        return (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount)
    },0);

    return (
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransactions, 
            addTransactions,
             transactions,
             balance
            }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}