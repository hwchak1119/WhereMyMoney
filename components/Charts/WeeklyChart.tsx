import { View, Text, Dimensions } from "react-native";
import React, { useMemo } from "react";
import { Svg, G, Line, Rect, Text as SvgText } from "react-native-svg";
import * as d3 from "d3";

import { theme } from "../../theme";
import { ExpenseProps, ExpenseGroupProps } from "../../types/expense";
import { dayNumberNames } from "../../types/constant";

type WeeklyExpensesProps = {
  expensesData: ExpenseGroupProps[];
};

const defaultData = [
  {
    label: "Monday",
    value: 100,
  },
  {
    label: "Tuesday",
    value: 500,
  },
  {
    label: "Wednesday",
    value: 300,
  },
  {
    label: "Thursday",
    value: 350,
  },
  {
    label: "Friday",
    value: 200,
  },
  {
    label: "Saturday",
    value: 80,
  },
  {
    label: "Sunday",
    value: 350,
  },
];

const WeeklyChart = ({ expensesData }: WeeklyExpensesProps) => {
  //   const groupedExpenses = useMemo(() => {
  //     const cal = expenses.reduce((acc, expense) => {
  //       const day = dayNumberNames[new Date(expense.date).getDay()];
  //       const existing = acc.find((e) => e.day === day);

  //       if (existing) return existing += expense.total;

  //       return (acc[day] = [expense]);
  //     });

  //     return cal
  //   }, [expenses]);
  const GRAPH_MARGIN = 20;
  const SVGHeight = 300;
  const SVGWidth = Dimensions.get("screen").width;
  const graphHeight = SVGHeight - 2 * GRAPH_MARGIN;
  const graphWidth = SVGWidth - 2 * GRAPH_MARGIN;

  // X scale point
  const xDomain = defaultData.map((item) => item.label);
  const xRange = [0, graphWidth];
  const x = d3.scalePoint().domain(xDomain).range(xRange).padding(1);

  // Y scale linear
  const yDomain = [0, d3.max(defaultData, (d) => d.value)];
  const yRange = [0, graphHeight];
  const y = d3.scaleLinear().domain(yDomain).range(yRange);

  return (
    <View>
      <Svg width={SVGWidth} height={SVGHeight}>
        <G y={graphHeight}>
          {/* bars */}
          {defaultData.map((item) => (
            <Rect
              key={item.label}
              x={x(item.label) - 5 / 2}
              y={y(item.value) * -1}
              rx={2.5}
              width={20}
              height={y(item.value)}
              fill={theme.colors.text}
            />
          ))}
          {/* bottom axis */}
          <Line
            x1="0"
            y1="2"
            x2={graphWidth}
            y2="2"
            stroke="#E4E4E4"
            strokeWidth=".5"
          />
          {/* labels */}
          {defaultData.map((item) => (
            <SvgText
              key={"label" + item.label}
              fontSize="8"
              x={x(item.label)}
              y="10"
              textAnchor="middle"
            >
              {item.label}
            </SvgText>
          ))}
        </G>
      </Svg>
      <Text style={{ color: theme.colors.text }}>WeeklyChart</Text>
    </View>
  );
};

export default WeeklyChart;
