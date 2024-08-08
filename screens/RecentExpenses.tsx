import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {DUMMY_EXPENSES} from "../components/ExpensesOutput/DummyExpenses";

export default function RecentExpenses() {
  return (
    <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod="Last 7 Days"/>
  );
}