import { View, Text } from "react-native";
import React from "react";

import { ListItem } from "../components/ListItem";
import { IconChevronRight } from "../constants/icons";
import { theme } from "../theme";

export const Settings = ({ navigation }) => {
  return (
    <View
      style={{
        margin: theme.spacing.lg,
        borderRadius: theme.borderRadius.md,
        overflow: "hidden",
      }}
    >
      <ListItem
        label="Catagories"
        detail={<IconChevronRight color={theme.colors.border} size={20} />}
        onClick={() => {
          navigation.navigate("Categories");
        }}
      />
      <ListItem
        label="Erase all data"
        detail={<IconChevronRight color={theme.colors.border} size={20} />}
        isDestructive
        onClick={() => {}}
      />
    </View>
  );
};
