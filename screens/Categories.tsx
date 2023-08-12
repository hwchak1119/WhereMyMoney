import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Modal,
  FlatList,
  Animated,
  ScrollView,
} from "react-native";
import React, { useCallback, useState } from "react";
import ColorPicker, {
  Panel1,
  Preview,
  Swatches,
} from "reanimated-color-picker";

// import { RealmContext } from "../RealmConfig";
import { Category } from "../models/category";
import { theme } from "../theme";
import { IconAdd, IconTrash } from "../constants/icons";
import { CategoryProps } from "../types/category";
import CategoryRow from "../components/CategoryRow";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

// const { useQuery, useRealm } = RealmContext;

export default function Categories() {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState(theme.colors.primary);
  const [newName, setNewName] = useState("");

  // const categories = useQuery(Category);
  // const realm = useRealm();

  const onSelectColor = ({ hex }) => {
    setSelectedColor(hex);
  };

  const createCategory = () => {
    if (!newName) return;

    // realm.write(() => {
    //   realm.create("Category", {
    //     _id: Math.random().toString(),
    //     color: selectedColor,
    //     name: newName,
    //   });
    // });
    setNewName("");
    setSelectedColor(theme.colors.primary);
  };

  const deleteCategory = useCallback((item: any) => {
    // categories.filter((category) => {
    //   category.id !== id;
    // })
    // realm.write(() => {
    //   realm.delete(item);
    // });
  }, []);

  const renderRightActions = (dragX, item) => {
    const trans = dragX.interpolate({
      inputRange: [0, 1, 1.5, 2],
      outputRange: [60, 0, -4, -5],
    });
    return (
      <RectButton
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.error,
          paddingHorizontal: theme.spacing.md,
        }}
        onPress={() => {
          deleteCategory(item);
        }}
      >
        <Animated.View
          style={{
            display: "flex",
            alignItems: "center",
            transform: [{ translateX: trans }],
          }}
        >
          <IconTrash color={theme.colors.text} size={20} />
          <Text
            style={{
              color: theme.colors.text,
            }}
          >
            Delete
          </Text>
        </Animated.View>
      </RectButton>
    );
  };

  return (
    <>
      <KeyboardAvoidingView
        style={{
          margin: theme.spacing.lg,
          flex: 1,
          justifyContent: "space-between",
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={100}
      >
        <ScrollView>
          <View
            style={{
              borderRadius: theme.borderRadius.md,
              overflow: "hidden",
            }}
          >
            {/* <FlatList
              data={categories}
              renderItem={({ item }) => (
                <Swipeable
                  containerStyle={{ backgroundColor: theme.colors.error }}
                  renderRightActions={(e) => renderRightActions(e, item)}
                >
                  <CategoryRow color={item.color} name={item.name} />
                </Swipeable>
              )}
              keyExtractor={(item) => item._id.toString()}
            /> */}
          </View>
        </ScrollView>

        {/* ToolBar */}
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            paddingVertical: theme.spacing.sm,
            gap: theme.spacing.sm,
          }}
        >
          <TouchableOpacity
            style={{ width: theme.spacing.xxl, height: theme.spacing.xxl }}
            onPress={() => {
              setShowColorPicker(!showColorPicker);
            }}
          >
            <View
              style={{
                backgroundColor: selectedColor,
                height: "100%",
                borderRadius: theme.borderRadius.md,
                borderWidth: 2,
                borderColor: theme.colors.text,
              }}
            />
          </TouchableOpacity>

          <TextInput
            style={{
              color: theme.colors.text,
              borderColor: theme.colors.border,
              borderWidth: 1,
              flex: 1,
              borderRadius: theme.borderRadius.sm,
              padding: theme.spacing.sm,
            }}
            placeholder="Categories name"
            onChange={(e) => {
              setNewName(e.nativeEvent.text);
            }}
            value={newName}
          />
          <TouchableOpacity
            style={{
              padding: theme.spacing.xs,
            }}
            onPress={() => {
              createCategory();
            }}
          >
            <IconAdd color={theme.colors.primary} size={28} />
          </TouchableOpacity>
        </View>

        <Modal
          visible={showColorPicker}
          animationType="slide"
          transparent={true}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: theme.colors.card,
                margin: 24,
                borderRadius: theme.borderRadius.lg,
                padding: 35,
                alignItems: "center",
              }}
            >
              <ColorPicker
                style={{
                  width: "85%",
                  gap: theme.spacing.xl,
                }}
                value="red"
                onComplete={onSelectColor}
              >
                <Preview hideInitialColor hideText />
                <Panel1 />
                <Swatches
                  colors={[
                    "#ef4444",
                    "#f59e0b",
                    "#fde047",
                    "#84cc16",
                    "#14b8a6",
                    "#3b82f6",
                    "#a855f7",
                    "#ec4899",
                    "#713f12",
                    "#fafafa",
                  ]}
                  swatchStyle={{ borderRadius: 5 }}
                />
              </ColorPicker>
              <Button
                title="Confirm"
                color={theme.colors.primary}
                onPress={() => setShowColorPicker(false)}
              />
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </>
  );
}
