import { useMemo } from "react";
import { Text, TouchableOpacity } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { theme } from "../theme";

type Props = {
  label: string;
  detail?: React.ReactNode;
  onPress?: () => void;
  swipeToDelete?: boolean;
  onDelete?: () => void;
  isDestructive?: boolean;
};

export const ListItem = ({
  label,
  detail,
  onPress,
  swipeToDelete,
  onDelete,
  isDestructive,
}: Props) => {
  const item = useMemo(
    () => (
      <TouchableOpacity
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: detail ? "space-between" : "flex-start",
          alignItems: "center",
          padding: theme.spacing.lg,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.border,
          backgroundColor: theme.colors.card,
        }}
        onPress={onPress}
        disabled={!onPress}
      >
        <Text style={{ color: isDestructive ? theme.colors.error : "white" }}>
          {label}
        </Text>
        {detail && <>{detail}</>}
      </TouchableOpacity>
    ),
    [label, detail]
  );

  if (swipeToDelete) {
    return (
      <Swipeable
        renderRightActions={() => (
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 100,
            }}
            onPress={onDelete}
          >
            <Text style={{ color: "white" }}>Delete</Text>
          </TouchableOpacity>
        )}
        onSwipeableRightOpen={onDelete}
      >
        {item}
      </Swipeable>
    );
  }
  // return item;
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: detail ? "space-between" : "flex-start",
        alignItems: "center",
        padding: theme.spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
        backgroundColor: theme.colors.card,
      }}
      onPress={onPress}
      disabled={!onPress}
    >
      <Text style={{ color: isDestructive ? theme.colors.error : "white" }}>
        {label}
      </Text>
      {detail && <>{detail}</>}
    </TouchableOpacity>
  );
};
