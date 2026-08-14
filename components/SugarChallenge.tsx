import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";

export default function SugarChallenge() {
  return (
    <View className="mt-3 rounded-3xl bg-white p-4 shadow-md">
      {/* Challenge Header */}
      <View className="flex-row items-center">
        <View className="h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100">
          <Ionicons name="trophy" size={24} color="#4CAF50" />
        </View>

        <View className="ml-3 flex-1">
          <Text
            className="font-poppins text-[12px] font-bold text-gray-900"
            numberOfLines={2}
          >
            21-Day Sugar Challenge
          </Text>

          <Text className="mt-1 font-poppins text-xs text-gray-500">
            You&apos;re doing awesome!
          </Text>
        </View>

        <View className="ml-2 shrink-0 flex-row items-center">
          <Text className="font-poppins-semibold text-xs text-green-700">
            Day 8/ 21
          </Text>

          <Ionicons
            name="chevron-forward"
            size={16}
            color="#333"
            style={{ marginLeft: 2 }}
          />
        </View>
      </View>
      {/* 21 Days */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-3"
      >
        <View className="flex-row items-center gap-2 px-1">
          {Array.from({ length: 21 }, (_, index) => {
            const day = index + 1;
            const completed = day <= 7;
            const current = day === 8;

            return (
              <View
                key={day}
                className={`h-7 w-7 items-center justify-center rounded-full ${
                  current
                    ? "bg-[#1B5E2E]"
                    : completed
                      ? "bg-[#65B047]"
                      : "border border-gray-300 bg-white"
                }`}
              >
                {completed ? (
                  <Ionicons name="checkmark" size={15} color="white" />
                ) : (
                  <Text
                    className={`font-poppins text-xs font-semibold ${
                      current ? "text-white" : "text-black"
                    }`}
                  >
                    {day}
                  </Text>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>

      {/* Tip for you */}
      <View className="mt-3 flex-row items-center rounded-2xl bg-gray-50 px-4 py-2">
        <View className="h-10 w-10 items-center justify-center rounded-full bg-[#E7F4E1]">
          <Ionicons name="bulb-outline" size={24} color="#4CAF50" />
        </View>

        <View className="ml-3 flex-1">
          <Text className="font-poppins text-sm font-bold text-gray-900">
            Tip for you
          </Text>

          <Text className="mt-1 font-poppins text-xs leading-5 text-gray-600">
            Try swapping sugar drinks
          </Text>

          <Text className="mt-1 font-poppins text-xs leading-5 text-gray-600">
            with coconut water and lemon water.
          </Text>
        </View>

        <Ionicons name="chevron-forward" size={22} color="#4CAF50" />
      </View>
    </View>
  );
}
