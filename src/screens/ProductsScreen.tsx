import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold mb-4">Tela Products</Text>
      <Button
        title="Ir para Usuário"
        onPress={() => navigation.navigate("User")}
      />
      <Button
        title="Ir para Produtos"
        onPress={() => navigation.navigate("Products")}
      />
    </View>
  );
}
