import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/screens/HomeScreen";
import UserScreen from "@/screens/UserScreen";
import ProductsScreen from "@/screens/ProductsScreen";
import Login from "@/screens/Auth/Login";

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
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
