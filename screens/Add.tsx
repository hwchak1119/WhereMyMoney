import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Button,
  TouchableHighlight,
} from "react-native";
import React, { useState, useRef, useMemo } from "react";
import BottomSheet, {
  BottomSheetView,
  BottomSheetFlatList,
} from "@gorhom/bottom-sheet";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

import { DismissKeyboardView } from "../components/DismissKeyboardView";
import { ListItem } from "../components/ListItem";
import { theme } from "../theme";
import { Recurrence } from "../types/constant";

import { CategoryProps } from "../types/category";

export const Add = () => {
  const [recurrence, setRecurrence] = useState<Recurrence>(Recurrence.None);
  const [amount, setAmount] = useState(null);
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState("");
  const [category, setCategory] = useState({
    id: "1",
    color: theme.colors.primary,
    name: "None",
  });
  const [sheetContent, setSheetContent] = useState<
    "recurrence" | "date" | "category"
  >("recurrence");

  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["50%", "85"], []);
  const data = useMemo(() => Object.keys(Recurrence), [Recurrence]);

  const categories: CategoryProps[] = [
    { id: "1", color: "#FFFFFF", name: "first" },
    { id: "2", color: "#FFFFFF", name: "second" },
    { id: "3", color: "#FFFFFF", name: "third" },
  ];

  return (
    <DismissKeyboardView>
      <KeyboardAvoidingView>
        <View
          style={{
            margin: theme.spacing.lg,
            borderRadius: theme.borderRadius.md,
            overflow: "hidden",
          }}
        >
          <ListItem
            label="Amount"
            detail={
              <TextInput
                placeholder="Amount"
                textAlign="right"
                keyboardType="numeric"
                onChangeText={(e) => setAmount(e)}
                style={{
                  color: "white",
                  flex: 1,
                  marginLeft: theme.spacing.sm,
                  padding: 10,
                  marginVertical: -theme.spacing.md,
                }}
              />
            }
          />

          <ListItem
            label="Recurrence"
            detail={
              <View style={{ marginVertical: -theme.spacing.md }}>
                <Button
                  title={recurrence}
                  color={theme.colors.primary}
                  onPress={() => {
                    setSheetContent("recurrence");
                    sheetRef.current?.snapToIndex(0);
                  }}
                />
              </View>
            }
          />

          <ListItem
            label="Date"
            detail={
              <View style={{ marginVertical: -theme.spacing.md }}>
                <Button
                  title={moment(date).format("YYYY-MM-DD h:mm a").toString()}
                  color={theme.colors.primary}
                  onPress={() => {
                    setSheetContent("date");
                    sheetRef.current?.snapToIndex(0);
                  }}
                />
              </View>
            }
          />

          <ListItem
            label="Note"
            detail={
              <TextInput
                placeholder="Note"
                textAlign="right"
                keyboardType="numeric"
                // onChangeText={(e) => setAmount(e)}
                style={{
                  color: "white",
                  flex: 1,
                  marginLeft: theme.spacing.sm,
                  padding: 10,
                  marginVertical: -theme.spacing.md,
                }}
              />
            }
          />

          <ListItem
            label="Category"
            detail={
              <View style={{ marginVertical: -theme.spacing.md }}>
                <Button
                  title={category.name}
                  color={category.color}
                  onPress={() => {
                    setSheetContent("category");
                    sheetRef.current?.snapToIndex(0);
                  }}
                />
              </View>
            }
          />
        </View>
      </KeyboardAvoidingView>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        index={-1}
        enablePanDownToClose
        handleStyle={{ backgroundColor: theme.colors.card }}
        handleIndicatorStyle={{ backgroundColor: theme.colors.text }}
        // onChange={handleSheetChange}
      >
        {sheetContent === "recurrence" && (
          <BottomSheetFlatList
            data={data}
            keyExtractor={(i) => i}
            renderItem={({ item }) => (
              <TouchableHighlight
                style={{ padding: theme.spacing.md }}
                onPress={() => {
                  setRecurrence(item as Recurrence);
                  sheetRef.current?.close();
                }}
              >
                <Text style={{ color: theme.colors.text }}>{item}</Text>
              </TouchableHighlight>
            )}
            style={{
              backgroundColor: theme.colors.card,
            }}
          />
        )}
        {sheetContent === "date" && (
          <BottomSheetView
            style={{
              backgroundColor: theme.colors.card,
              height: "100%",
            }}
          >
            <DateTimePicker
              display="inline"
              testID="dateTimePicker"
              value={date}
              mode={"date"}
              onChange={(e, selectedDate) => {
                setDate(selectedDate);
              }}
            />
          </BottomSheetView>
        )}
        {sheetContent === "category" && (
          <BottomSheetFlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableHighlight
                style={{ padding: theme.spacing.md }}
                onPress={() => {
                  setCategory(item);
                  sheetRef.current?.close();
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: theme.spacing.md,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: item.color,
                      height: 12,
                      width: 12,
                      borderRadius: theme.borderRadius.md,
                    }}
                  />
                  <Text style={{ color: theme.colors.text }}>{item.name}</Text>
                </View>
              </TouchableHighlight>
            )}
            style={{
              backgroundColor: theme.colors.card,
            }}
          />
        )}
      </BottomSheet>
    </DismissKeyboardView>
  );
};
