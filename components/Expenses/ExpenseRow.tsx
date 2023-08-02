import { View, Text, FlatList } from "react-native";
import React from "react";
import moment from "moment";
import { theme } from "../../theme";
import { ExpenseProps } from "../../types/expense";

type RowProps = {
  expense: ExpenseProps;
};

const ExpenseRow = ({ expense }: RowProps) => {
  return (
    <View
      style={{
        display: "flex",
        width: "100%",
        paddingVertical: theme.spacing.md,
        gap: theme.spacing.xs,
        borderColor: theme.colors.border,
        borderBottomWidth: 1,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text
          style={{
            color: theme.colors.text,
          }}
        >
          {expense.note}
        </Text>
        <Text
          style={{
            color: theme.colors.text,
          }}
        >
          HKD {expense.amount}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View
          style={{
            backgroundColor: `${expense.category.color}50`,
            paddingHorizontal: theme.spacing.xxs,
            paddingVertical: 2,
            borderRadius: theme.borderRadius.sm,
          }}
        >
          <Text
            style={{
              color: theme.colors.text,
            }}
          >
            {expense.category.name}
          </Text>
        </View>
        <Text style={{ color: theme.colors.info }}>
          {moment(expense.date).format("hh:mm")}
        </Text>
      </View>
    </View>
  );
};

export default ExpenseRow;
