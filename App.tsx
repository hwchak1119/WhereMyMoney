import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import TabScreen from "./screens/TabScreen";
import Categories from "./screens/Categories";
import { theme } from "./theme";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={theme}>
        <StatusBar style="dark" />
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="TabScreen"
            component={TabScreen}
          />
          {/* Setting */}
          <Stack.Screen name="Categories" component={Categories} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
