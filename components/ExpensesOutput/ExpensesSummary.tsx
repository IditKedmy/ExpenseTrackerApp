import {View, Text, StyleSheet} from "react-native";
import {Expense} from "../../util/expense";
import {GlobalStyles} from "../../constants/styles";

type ExpensesSummaryProps = {
  expenses: Expense[];
  periodName: string;
}

export default function ExpensesSummary({expenses, periodName}: ExpensesSummaryProps) {
  const expensesSum = expenses.reduce((sum: number, expense: Expense) => sum + expense.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  }
});