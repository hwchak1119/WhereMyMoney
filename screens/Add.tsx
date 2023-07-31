import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  FlatList,
  Button,
  TouchableHighlight,
} from "react-native";
import React, { useState, useRef, useMemo } from "react";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import { ListItem } from "../components/ListItem";
import { theme } from "../theme";
import { Recurrence } from "../types/constant";

export const Add = () => {
  const [recurrence, setRecurrence] = useState<Recurrence>(Recurrence.None);
  const [amount, setAmount] = useState(null);

  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["25%", "70"], []);
  const data = useMemo(() => Object.keys(Recurrence), [Recurrence]);

  return (
    <>
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
                // keyboardType="numeric"
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
      </BottomSheet>
    </>
  );
};
