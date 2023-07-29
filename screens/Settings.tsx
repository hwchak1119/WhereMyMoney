import { View, Text, Alert } from "react-native";
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
        isDestructive
        onClick={() => {
          Alert.alert(
            "Are you sure man?",
            "Don't ignore how much money you wasted on buying useless stuffs",
            [
              { text: "Cancel", style: "cancel" },
              {
                text: "Confirm erase",
                style: "destructive",
                onPress: () => {},
              },
            ]
          );
        }}
      />
    </View>
  );
};
