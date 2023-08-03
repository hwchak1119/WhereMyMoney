import {
  MaterialCommunityIcons,
  Entypo,
  Ionicons,
  Feather,
} from "@expo/vector-icons";

type IconProps = {
  color?: string;
  size?: number;
};

export const IconExpenses = ({ size, color }: IconProps) => {
  return (
    <MaterialCommunityIcons name="export-variant" color={color} size={size} />
  );
};
export const IconReports = ({ size, color }: IconProps) => {
  return <Entypo name="bar-graph" color={color} size={size} />;
};
export const IconAdd = ({ size, color }: IconProps) => {
  return <Ionicons name="ios-add" color={color} size={size} />;
};
export const IconCircleAdd = ({ size, color }: IconProps) => {
  return <Ionicons name="add-circle-outline" color={color} size={size} />;
};
export const IconSettings = ({ size, color }: IconProps) => {
  return <Ionicons name="ios-settings-sharp" color={color} size={size} />;
};
export const IconChevronRight = ({ size, color }: IconProps) => {
  return <Entypo name="chevron-small-right" color={color} size={size} />;
};
export const IconTrash = ({ size, color }: IconProps) => {
  return <Feather name="trash-2" color={color} size={size} />;
};
export const IconCalendar = ({ size, color }: IconProps) => {
  return <Entypo name="calendar" color={color} size={size} />;
};
