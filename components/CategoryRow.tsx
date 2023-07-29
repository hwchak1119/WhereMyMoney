import { View, Text } from "react-native";
import React from "react";
import { theme } from "../theme";
import { CategoryProps } from "../types/category";

export default function CategoryRow({
  color,
  name,
}: Omit<CategoryProps, "id">) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: theme.spacing.md,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        padding: theme.spacing.lg,
        borderBottomWidth: 1,
        borderColor: theme.colors.border,
        backgroundColor: theme.colors.card,
      }}
    >
      <View
        style={{
          backgroundColor: color,
          width: theme.spacing.lg,
          height: theme.spacing.lg,
          borderWidth: 2,
          borderColor: theme.colors.text,
          borderRadius: theme.borderRadius.md,
        }}
      />
      <Text style={{ color: theme.colors.text }}>{name}</Text>
    </View>
  );
}
