import Panda from "@/components/Panda";
import SugarProgress from "@/components/SugarProgress";
import { Ionicons } from "@expo/vector-icons";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import QuickActions from "../components/QuickActions";
export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [sugarValue, setSugarValue] = useState(68);
  return (
    <View className="flex-1 bg-[#F8F9F4]" style={{ paddingTop: insets.top }}>
      {/* Navbar */}
      <View className="h-16 flex-row items-center justify-between  px-5">
        <Ionicons name="menu-outline" size={28} color="black" />

        <Text className="font-poppins font-bold  text-[18px]">
          Zoogar <Text className="text-[#2A732E]">Panda</Text>
        </Text>

        <Ionicons name="notifications-outline" size={26} color="black" />
      </View>

      {/* Main Content */}
      <View className="flex-1 px-5 pt-6">
        {/* Hero Section */}
        <View className="flex-row gap-2">
          {/* Left Column */}
          <View className="flex-1">
            <Text className="font-poppins text-[20px] text-black">
              Good Morning,
            </Text>

            <Text className="font-poppins-bold text-[30px] text-[#2A732E]">
              Jino! 👋
            </Text>

            <Text className="mt-2 font-poppins text-sm  text-[#666]">
              Small choices today,
            </Text>

            <Text className="font-poppins text-sm text-[#666]">
              better health tomorrow
            </Text>

            {/* Streak Card */}
            <View className="mt-3 max-w-42 flex-row items-center rounded-xl bg-white p-3 shadow-sm">
              {/* Fire Icon */}
              <View
                className="h-14 w-14 items-center justify-center rounded-full"
                style={{
                  backgroundColor: "rgba(42, 115, 46, 0.15)",
                }}
              >
                <Ionicons name="flame" size={32} color="#2A732E" />
              </View>

              {/* Text Content */}
              <View className="ml-3 flex-1">
                <Text className="font-poppins font-medium text-2xl text-[#2A732E]">
                  12
                </Text>

                <Text className=" font-poppins-semibold text-sm">
                  Day Streak
                </Text>

                <Text className=" font-poppins text-sm text-[#2A732E]">
                  Keep it up!
                </Text>
              </View>
            </View>
          </View>

          {/* Right Column - 3D Panda */}
          <View className="h-50 flex-[1.2]  ">
            <Canvas
              camera={{
                position: [0, 0, 5],
                fov: 45,
              }}
            >
              <ambientLight intensity={1.5} />
              <Panda sugarValue={sugarValue} />
            </Canvas>
          </View>
        </View>
        {/* Sugar Progress */}
        <SugarProgress sugarValue={sugarValue} setSugarValue={setSugarValue} />
        <QuickActions />
      </View>
    </View>
  );
}
