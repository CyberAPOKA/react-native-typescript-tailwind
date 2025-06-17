import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function LoginScreen() {
  return (
    <ScrollView
      className="flex-1 bg-black px-6"
      contentContainerStyle={{ justifyContent: "center", flexGrow: 1 }}
    >
      <StatusBar style="light" />

      <View className="items-center mb-8">
        <Image
          source={require("@/assets/logo-heon.png")}
          className="w-24 h-24 mb-2"
          resizeMode="contain"
        />
        <Text className="text-white text-2xl font-bold">Acesse sua conta</Text>
      </View>

      <View className="w-full">
        <Text className="text-white mb-1">
          E-mail <Text className="text-red-500">*</Text>
        </Text>
        <TextInput
          className="bg-white rounded-md px-4 py-3 mb-4 text-black"
          placeholder="Digite seu e-mail"
          placeholderTextColor="#999"
          autoCapitalize="none"
        />

        <Text className="text-white mb-1">
          Senha <Text className="text-red-500">*</Text>
        </Text>
        <TextInput
          className="bg-white rounded-md px-4 py-3 text-black"
          placeholder="Digite sua senha"
          placeholderTextColor="#999"
          secureTextEntry
        />

        <TouchableOpacity className="mt-2 mb-6">
          <Text className="text-right text-white text-sm underline">
            Esqueci minha senha
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="border border-white rounded-md py-3">
          <Text className="text-white text-center font-semibold">
            Acessar minha conta
          </Text>
        </TouchableOpacity>
      </View>

      <View className="mt-10 border-t border-gray-600" />

      <Text className="text-center text-xs text-gray-400 mt-6">
        ©2024 PLATAFORMA HEON. TODOS OS DIREITOS RESERVADOS.
      </Text>

      <TouchableOpacity className="absolute bottom-8 right-0 bg-[#303033] p-2 rounded-full">
        <Image
          source={require("@/assets/whatsapp.png")}
          style={{ width: 50, height: 50 }}
        />
      </TouchableOpacity>
    </ScrollView>
  );
}
