import { View, Text } from "react-native";
import React, { useMemo } from "react";
import { BarChart } from "react-native-chart-kit";

import { theme } from "../../theme";
import { ExpenseProps, ExpenseGroupProps } from "../../types/expense";
import { dayNumberNames } from "../../types/constant";

type WeeklyExpensesProps = {
  expenses: ExpenseGroupProps[];
};

const WeeklyChart = ({ expenses }: WeeklyExpensesProps) => {
  //   const groupedExpenses = useMemo(() => {
  //     const cal = expenses.reduce((acc, expense) => {
  //       const day = dayNumberNames[new Date(expense.date).getDay()];
  //       const existing = acc.find((e) => e.day === day);

  //       if (existing) return existing += expense.total;

  //       return (acc[day] = [expense]);
  //     });

  //     return cal
  //   }, [expenses]);
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };
  return (
    <View>
      <Text style={{ color: theme.colors.text }}>WeeklyChart</Text>
      <BarChart
        data={data}
        width={300}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="string"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    </View>
  );
};

export default WeeklyChart;
