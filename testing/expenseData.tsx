import { Recurrence } from "../types/constant";

export const expensesData = [
  {
    date: "Today",
    expenses: [
      {
        id: "1",
        amount: 150,
        note: "Name",
        recurrence: Recurrence.None,
        date: new Date("2023-08-03T10:09:29.570Z"),
        category: { id: "1", color: "#FFFFFF", name: "string" },
      },
      {
        id: "2",
        amount: 50,
        note: "Name",
        recurrence: Recurrence.None,
        date: new Date("2023-08-03T11:11:29.570Z"),
        category: { id: "1", color: "#FFFFFF", name: "string" },
      },
    ],
    total: 500,
  },
  {
    date: "Yesterday",
    expenses: [
      {
        id: "1",
        amount: 250,
        note: "Name",
        recurrence: Recurrence.None,
        date: new Date("2023-08-02T10:09:29.570Z"),
        category: { id: "1", color: "#FFFFFF", name: "string" },
      },
      {
        id: "2",
        amount: 150,
        note: "Name",
        recurrence: Recurrence.None,
        date: new Date("2023-08-02T11:11:29.570Z"),
        category: { id: "1", color: "#FFFFFF", name: "string" },
      },
    ],
    total: 200,
  },
  {
    date: "Noterday",
    expenses: [
      {
        id: "1",
        amount: 520,
        note: "Name",
        recurrence: Recurrence.None,
        date: new Date("2023-08-01T10:09:29.570Z"),
        category: { id: "1", color: "#FFFFFF", name: "string" },
      },
      {
        id: "2",
        amount: 530,
        note: "Name",
        recurrence: Recurrence.None,
        date: new Date("2023-08-01T11:11:29.570Z"),
        category: { id: "1", color: "#FFFFFF", name: "string" },
      },
    ],
    total: 350,
  },
];
