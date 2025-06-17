import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function DashboardScreen() {
  return (
    <ScrollView className="flex-1 bg-[#E8F7FA] px-4 pt-10 pb-6">
      <StatusBar style="dark" />

      <View className="flex-row justify-between items-center mb-6 px-1">
        <View className="flex-row items-center">
          <Image
            source={require("@/assets/logo-heon.png")}
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
          <Text className="text-lg font-bold text-black">Dashboard</Text>
        </View>

        <View className="flex-row space-x-4">
          <TouchableOpacity>
            <Image
              source={require("@/assets/icontest.png")}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("@/assets/icontest.png")}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row flex-wrap justify-between gap-y-6">
        {[
          { label: "Agenda", icon: require("@/assets/icontest.png") },
          {
            label: "Orçamentos",
            icon: require("@/assets/icontest.png"),
          },
          {
            label: "Tratamentos",
            icon: require("@/assets/icontest.png"),
          },
          {
            label: "Pacientes",
            icon: require("@/assets/icontest.png"),
          },
          {
            label: "Financeiro",
            icon: require("@/assets/icontest.png"),
          },
          {
            label: "Heon pay",
            icon: require("@/assets/icontest.png"),
          },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            className="w-[48%] bg-white rounded-lg items-center p-6 shadow-sm"
          >
            <Image
              source={item.icon}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
            <Text className="text-black font-semibold">{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View className="mt-10">
        <Text className="text-center text-xs text-gray-500">
          ©2024 PLATAFORMA HEON. TODOS OS DIREITOS RESERVADOS.
        </Text>
      </View>

      <View className="absolute bottom-0 right-4 space-y-3 items-end">
        <TouchableOpacity className="bg-green-500 p-3 rounded-full">
          <Image
            source={require("@/assets/whatsapp.png")}
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity className="bg-black p-3 rounded-full">
          <Text className="text-white text-xs font-bold">90%</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
