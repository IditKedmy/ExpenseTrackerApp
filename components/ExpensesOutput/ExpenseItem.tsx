import {View, Text, StyleSheet, Pressable} from "react-native";
import {Expense} from "../../util/expense";
import {GlobalStyles} from "../../constants/styles";
import {getFormattedDate} from "../../util/date";

type ExpenseItemProps = {
  expense: Expense;
}

export default function ExpenseItem({expense}: ExpenseItemProps) {
  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>{expense.description}</Text>
          <Text style={styles.textBase}>{getFormattedDate(expense.date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${expense.amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  expenseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  },
});