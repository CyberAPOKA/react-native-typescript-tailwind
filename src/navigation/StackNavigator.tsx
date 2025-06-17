import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/screens/HomeScreen";
import UserScreen from "@/screens/UserScreen";
import ProductsScreen from "@/screens/ProductsScreen";
import DashboardScreen from "@/screens/DashboardScreen";
import TreatmentsScreen from "@/screens/TreatmentsScreen";
import LoginScreen from "@/screens/Auth/LoginScreen";

export type RootStackParamList = {
  Home: undefined;
  User: undefined;
  Products: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="User" component={UserScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Treatments" component={TreatmentsScreen} />
    </Stack.Navigator>
  );
}
