import { CategoryProps } from "./category";
import { Recurrence } from "./constant";

export type ExpenseProps = {
  id: string;
  amount: number;
  note: string;
  recurrence: Recurrence;
  date: Date;
  category: CategoryProps;
};

export type ExpenseGroupProps = {
  date: string;
  expenses: ExpenseProps[];
  total: number;
};
