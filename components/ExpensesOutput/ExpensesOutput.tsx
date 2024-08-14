import {View, StyleSheet, Text} from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import {Expense} from "../../util/expense";
import {GlobalStyles} from "../../constants/styles";

type ExpensesOutputProps = {
  expenses: Expense[];
  expensesPeriod: string;
  fallbackText: string;
}

export default function ExpensesOutput({expenses, expensesPeriod, fallbackText}: ExpensesOutputProps) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: 'white',
    textAlign: "center",
    fontSize: 16,
    marginTop: 32,
  }
});