import { View, Text, Button, TouchableOpacity } from "react-native";
import ExpenseList from "../components/Expenses/ExpenseList";
import { Recurrence } from "../types/constant";
import { theme } from "../theme";

const demoGroups = [
  {
    date: "Today",
    expenses: [
      {
        id: "1",
        amount: 50,
        note: "Name",
        recurrence: Recurrence.None,
        date: new Date(),
        category: { id: "1", color: "#FFFFFF", name: "string" },
      },
      {
        id: "2",
        amount: 50,
        note: "Name",
        recurrence: Recurrence.None,
        date: new Date(),
        category: { id: "1", color: "#FFFFFF", name: "string" },
      },
    ],
    total: 200,
  },
  {
    date: "string",
    expenses: [
      {
        id: "1",
        amount: 50,
        note: "Name",
        recurrence: Recurrence.None,
        date: new Date(),
        category: { id: "1", color: "#FFFFFF", name: "string" },
      },
      {
        id: "2",
        amount: 50,
        note: "Name",
        recurrence: Recurrence.None,
        date: new Date(),
        category: { id: "1", color: "#FFFFFF", name: "string" },
      },
    ],
    total: 200,
  },
];

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
      <ExpenseList groups={demoGroups} />
    </View>
  );
};
