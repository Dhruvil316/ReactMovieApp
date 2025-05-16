import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View className="bg-purple-100 h-full justify-center items-center ">
      <Text className="text-5xl font-bold">Welcome</Text>
      <Link href="/onboarding">Onboarding</Link>
      <Link href="/movie/1">details</Link>
    </View>
  );
}
