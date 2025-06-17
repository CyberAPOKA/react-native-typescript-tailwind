import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

const data = [
  {
    id: 1,
    paciente: "Wagner Dertinati Junior",
    status: "Andamento",
    complexidade: "Baixa",
    valor: "347,01",
  },
  {
    id: 2,
    paciente: "Wagner Dertinati Junior",
    status: "Andamento",
    complexidade: "Baixa",
    valor: "680,94",
  },
  {
    id: 3,
    paciente: "Sthefani Toledo Ramirez",
    status: "Andamento",
    complexidade: "Baixa",
    valor: "902,00",
  },
];

export default function TreatmentsScreen() {
  return (
    <ScrollView className="flex-1 bg-[#E8F7FA] px-4 pt-10 pb-6">
      <StatusBar style="dark" />

      <View className="flex-row justify-between items-center mb-6">
        <View className="flex-row items-center space-x-2">
          <Image
            source={require("@/assets/logo-heon.png")}
            style={{ width: 24, height: 24 }}
          />
          <TouchableOpacity>
            <Text className="text-lg font-bold">Tratamentos</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row space-x-4">
          <TouchableOpacity>
            <Image
              source={require("@/assets/icontest.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("@/assets/icontest.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-xl font-bold">Tratamentos Aprovados</Text>
        <TouchableOpacity>
          <Image
            source={require("@/assets/icontest.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>

      {data.map((item) => (
        <View
          key={item.id}
          className="bg-white rounded-lg p-4 mb-4 shadow-sm flex-col"
        >
          <View className="flex-row justify-between items-start mb-2">
            <View className="flex-1">
              <Text className="text-gray-500 font-semibold">Paciente:</Text>
              <Text className="text-black">{item.paciente}</Text>
            </View>
            <View className="flex-row space-x-4">
              <TouchableOpacity>
                <Image
                  source={require("@/assets/icontest.png")}
                  style={{ width: 24, height: 24 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("@/assets/icontest.png")}
                  style={{ width: 24, height: 24 }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row justify-between mb-1">
            <Text className="text-gray-500 font-semibold">Data:</Text>
            <Text className="text-gray-500 font-semibold">Status:</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-black">--</Text>
            <Text className="text-black">{item.status}</Text>
          </View>

          <View className="flex-row justify-between">
            <View>
              <Text className="text-gray-500 font-semibold">Complexidade:</Text>
              <Text className="text-black">{item.complexidade}</Text>
            </View>
            <View>
              <Text className="text-gray-500 font-semibold">
                Valor do Tratamento:
              </Text>
              <Text className="text-black">{item.valor}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
