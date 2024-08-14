import {createContext, JSX, useReducer} from "react";
import {Expense} from "../util/expense";
import {DUMMY_EXPENSES} from "../components/ExpensesOutput/DummyExpenses";

export const ExpensesContext = createContext({
  expenses: [] as Expense[],
  addExpense: (expense: Expense) => {},
  removeExpense: (id: string) => {},
  updateExpense: (expense: Expense) => {},
});

function expensesReducer(state: Expense[], action: {type: string, payload: Expense | string}) {
  switch (action.type) {
    case 'ADD':
      if (typeof action.payload === 'string') {
        return state;
      }
      const id = new Date().toString() + Math.random().toString();
      action.payload.id = id;
      return [{...action.payload as Expense}, ...state];
    case 'REMOVE':
      return state.filter((expense) => expense.id !== action.payload as string);
    case 'UPDATE':
      const expense = action.payload as Expense;
      const expenseIndex = state.findIndex((e) => e.id === expense.id);
      const updatedExpenses = [...state];
      updatedExpenses[expenseIndex] = expense;
      return updatedExpenses;
    default:
      return state;
  }
}

export default function ExpensesContextProvider({children}: {children: JSX.Element}) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES as Expense[]);

  function addExpense(expense: Expense) {
    dispatch({type: 'ADD', payload: expense});
  }

  function removeExpense(id: string) {
    dispatch({type: 'REMOVE', payload: id});
  }

  function updateExpense(expense: Expense) {
    dispatch({type: 'UPDATE', payload: expense});
  }

  return (
    <ExpensesContext.Provider value={{expenses: expensesState, addExpense, removeExpense, updateExpense}}>
      {children}
    </ExpensesContext.Provider>
  );
}