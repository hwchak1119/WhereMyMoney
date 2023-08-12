// export type CategoryProps = {
//     id: string;
//     color: string;
//     name: string;
//   };

import Realm from "realm";

// Define your object model
export class Category extends Realm.Object<Category> {
  _id!: Realm.BSON.ObjectId;
  color!: string;
  name!: string;

  static schema = {
    name: "Category",
    properties: {
      _id: "objectId",
      color: "string",
      name: "string",
    },
    primaryKey: "_id",
  };
}
