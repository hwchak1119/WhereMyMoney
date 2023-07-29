import { colors } from "./theme";

export const theme = {
  dark: true,
  colors: {
    primary: colors.teal[500],
    error: colors.red[500],
    background: colors.zinc[900],
    card: colors.zinc[800],
    text: colors.zinc[50],
    border: colors.zinc[700],
    notification: colors.teal[500],
  },
  spacing: {
    xxs: 4,
    xs: 6,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
  },
  borderRadius: {
    sm: 5,
    md: 10,
    lg: 20,
  },
};

export { colors };
