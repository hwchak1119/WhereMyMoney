import { View, Text, Button, TouchableOpacity } from "react-native";
import ExpenseList from "../components/Expenses/ExpenseList";
import { theme } from "../theme";

import { expensesData } from "../testing/expenseData";

export const Expenses = () => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: theme.spacing.md,
        }}
      >
        <Text style={{ color: theme.colors.info }}>Total </Text>
        <TouchableOpacity>
          <Text style={{ color: theme.colors.primary }}>This week</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "baseline",
          gap: theme.spacing.sm,
        }}
      >
        <Text style={{ color: theme.colors.info }}>HKD</Text>
        <Text style={{ color: theme.colors.text, fontSize: 36 }}>195</Text>
      </View>
      <ExpenseList groups={expensesData} />
    </View>
  );
};
