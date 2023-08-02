import { View, Text, FlatList } from "react-native";
import React from "react";

import { ExpenseGroupProps } from "../../types/expense";
import ExpenseRow from "./ExpenseRow";
import { theme } from "../../theme";

type SectionProps = {
  groups: ExpenseGroupProps[];
};

const ExpenseList = ({ groups }: SectionProps) => {
  return (
    <View
      style={{
        display: "flex",
        margin: theme.spacing.lg,
        height: "100%",
      }}
    >
      <FlatList
        data={groups}
        renderItem={({ item }) => (
          <View
            style={{
              display: "flex",
              width: "100%",
              padding: theme.spacing.md,
              marginBottom: theme.spacing.lg,
              borderRadius: theme.borderRadius.md,
              backgroundColor: theme.colors.card,
            }}
          >
            <View
              style={{
                paddingVertical: theme.spacing.sm,
                borderColor: theme.colors.border,
                borderBottomWidth: 1,
              }}
            >
              <Text
                style={{
                  color: theme.colors.info,
                }}
              >
                {item.date}
              </Text>
            </View>
            {/* <hr /> */}
            <FlatList
              data={item.expenses}
              renderItem={({ item }) => <ExpenseRow expense={item} />}
              keyExtractor={(item) => item.id}
            />
            {/* <hr /> */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                paddingVertical: theme.spacing.sm,
              }}
            >
              <Text style={{ color: theme.colors.info, fontSize: 14 }}>
                Total
              </Text>
              <Text style={{ color: theme.colors.text, fontSize: 14 }}>
                HKD {item.total}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.date}
      />
    </View>
  );
};

export default ExpenseList;
