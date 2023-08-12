import { Category } from "./models/category";
import { Expense } from "./models/expense";
import { createRealmContext } from "@realm/react";
export const RealmContext = createRealmContext({
  // Pass all of your models into the schema value.
  schema: [Category, Expense],
});
