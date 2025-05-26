import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "@/navigation/StackNavigator";
import "react-native-gesture-handler";
import "../global.css";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
