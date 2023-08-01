import React from "react";
import { TouchableWithoutFeedback, Keyboard, View } from "react-native";

export const DismissKeyboardView = ({ children, ...props }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}
    >
      <View style={{ flex: 1 }} {...props}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};
