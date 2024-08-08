import {View, Text, StyleSheet} from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {DUMMY_EXPENSES} from "../components/ExpensesOutput/DummyExpenses";

export default function AllExpenses() {
  return (
    <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod="Total"/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});