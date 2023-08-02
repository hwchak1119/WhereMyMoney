import { View, Text } from "react-native";
import ExpenseList from "../components/Expenses/ExpenseList";
import { Recurrence } from "../types/constant";

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
      <ExpenseList groups={demoGroups} />
    </View>
  );
};
