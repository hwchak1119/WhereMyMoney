import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useRef, useMemo } from "react";
import BottomSheet, {
  BottomSheetView,
  BottomSheetFlatList,
} from "@gorhom/bottom-sheet";

import { IconCalendar } from "../constants/icons";
import { theme } from "../theme";
import WeeklyChart from "../components/Charts/WeeklyChart";
import { ListItem } from "../components/ListItem";
import { Recurrence } from "../types/constant";

import { expensesData } from "../testing/expenseData";

export const Reports = ({ navigation }) => {
  const [recurrence, setRecurrence] = useState<Recurrence>(Recurrence.Monthly);
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["50%", "85"], []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: theme.spacing.md }}
          onPress={() => sheetRef.current?.snapToIndex(0)}
        >
          <IconCalendar size={20} color={theme.colors.text} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <View
        style={{
          display: "flex",
          margin: theme.spacing.md,
          height: "100%",
        }}
      >
        <WeeklyChart expensesData={expensesData} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text style={{ color: theme.colors.text }}>1 Aug - 3 Aug</Text>
          <Text style={{ color: theme.colors.text }}>Average/day</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: theme.spacing.xs,
            }}
          >
            <Text style={{ color: theme.colors.info }}>HKD</Text>
            <Text style={{ color: theme.colors.text }}>195</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: theme.spacing.xs,
            }}
          >
            <Text style={{ color: theme.colors.info }}>HKD</Text>
            <Text style={{ color: theme.colors.text }}>195</Text>
          </View>
        </View>
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        index={-1}
        enablePanDownToClose
        handleStyle={{ backgroundColor: theme.colors.card }}
        handleIndicatorStyle={{ backgroundColor: theme.colors.text }}
        // onChange={handleSheetChange}
      >
        <BottomSheetFlatList
          data={[Recurrence.Weekly, Recurrence.Monthly, Recurrence.Yearly]}
          renderItem={({ item }) => (
            <View>
              <ListItem
                label={item}
                color={
                  recurrence === item ? theme.colors.primary : theme.colors.text
                }
                onPress={() => {
                  setRecurrence(item);
                  sheetRef.current?.close();
                }}
              />
            </View>
          )}
          style={{
            backgroundColor: theme.colors.card,
            height: "100%",
          }}
        ></BottomSheetFlatList>
      </BottomSheet>
    </View>
  );
};
