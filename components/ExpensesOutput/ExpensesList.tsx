import {FlatList, StyleSheet} from "react-native";
import {Expense} from "../../util/expense";
import ExpenseItem from "./ExpenseItem";

type ExpensesListProps = {
  expenses: Expense[];
}

export default function ExpensesList({expenses}: ExpensesListProps) {
  const renderExpenseItem = ({item}: {item: Expense}) => (
    <ExpenseItem expense={item} />
  );

  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
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