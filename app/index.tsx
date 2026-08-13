import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-[#F8F9F4]" style={{ paddingTop: insets.top }}>
      {/* Navbar */}
      <View className="h-16 flex-row items-center justify-between bg-white px-5">
        <Ionicons name="menu-outline" size={28} color="black" />

        <Text className="text-lg font-bold">
          Zoogar <Text className="text-[#2A732E]">Panda</Text>
        </Text>
        <Ionicons name="notifications-outline" size={26} color="black" />
      </View>

      {/* Main Content */}
      <View className="flex-1 px-5 pt-6">
        {/* Hero Section */}
        <View className="flex-row">
          {/* Left Column */}
          <View className="flex-1">
            <Text className="text-[20px]  text-black">Good Morning,</Text>
            <Text className="text-[30px] font-bold text-[#2A732E]">
              Jino! 👋
            </Text>
            <Text className="mt-2 text-base text-[#666]">
              Small choices today,
            </Text>
            <Text className="text-base text-[#666]">
              better health tomorrow
            </Text>
            {/* Streak Card */}
            <View className="mt-4 max-w-42 flex-row items-center rounded-xl bg-white p-3 shadow-sm">
              {/* Fire Icon - No border */}
              <View
                className="h-14 w-14 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(42, 115, 46, 0.15)" }}
              >
                <Ionicons name="flame" size={32} color="#2A732E" />
              </View>

              {/* Text Content */}
              <View className="ml-3 flex-1">
                <Text className="text-4xl font-bold text-[#2A732E]">12</Text>
                <Text className="mt-1 text-sm font-semibold ">Day Streak</Text>
                <Text className="mt-1 text-sm text-[#2A732E]">Keep it up!</Text>
              </View>
            </View>
          </View>

          {/* Right Column */}
          <View className="flex-1">
            <Text className="text-base text-black">Panda will go here 🐼</Text>
          </View>
        </View>
        {/* Sugar Level */}
        <View className="mt-8">
          <Text className="text-2xl font-bold text-black">Sugar Level</Text>

          <Text className="mt-2 text-base text-[#666]">54g / 80g</Text>
        </View>
      </View>
    </View>
  );
}
