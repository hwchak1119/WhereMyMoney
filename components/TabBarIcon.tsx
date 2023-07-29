import React from "react";

import {
  IconExpenses,
  IconReports,
  IconCircleAdd,
  IconSettings,
} from "../constants/icons";

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
  type: "expenses" | "reports" | "add" | "settings";
};

export default function TabBarIcon({
  focused,
  color,
  size,
  type,
}: TabBarIconProps) {
  const iconTypes = {
    expenses: <IconExpenses color={color} size={size} />,
    reports: <IconReports color={color} size={size} />,
    add: <IconCircleAdd color={color} size={size} />,
    settings: <IconSettings color={color} size={size} />,
  };

  return <>{iconTypes[type]}</>;
}
