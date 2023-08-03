import { Recurrence } from "../types/constant";

export const expensesData = [
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
    date: "Yesterday",
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
