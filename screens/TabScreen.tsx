import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { theme } from "../theme";
import { Expenses, Reports, Add, Settings } from "../screens";
import TabBarIcon from "../components/TabBarIcon";

const Tab = createBottomTabNavigator();

export default function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.card,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <TabBarIcon type="expenses" {...props} />,
        }}
        name="Expenses"
        component={Expenses}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <TabBarIcon type="reports" {...props} />,
        }}
        name="Reports"
        component={Reports}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <TabBarIcon type="add" {...props} />,
        }}
        name="Add"
        component={Add}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <TabBarIcon type="settings" {...props} />,
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
}
