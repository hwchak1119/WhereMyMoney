// import { CategoryProps } from "./category";
// import { Recurrence } from "../types/constant";

// export type ExpenseProps = {
//   id: string;
//   amount: number;
//   note: string;
//   recurrence: Recurrence;
//   date: Date;
//   category: CategoryProps;
// };

// export type ExpenseGroupProps = {
//   date: string;
//   expenses: ExpenseProps[];
//   total: number;
// };

import Realm from "realm";
import { Category } from "./category";

// Define your object model
export class Expense extends Realm.Object<Expense> {
  _id!: Realm.BSON.ObjectId;
  amount!: number;
  note!: string;
  recurrence: string;
  date!: Date;
  category: Category;

  static schema = {
    name: "Expense",
    properties: {
      _id: "objectId",
      amount: "int",
      note: "string",
      recurrence: "string",
      date: "date",
      category: "Category",
    },
    primaryKey: "_id",
  };
}
