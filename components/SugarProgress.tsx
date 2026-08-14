import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
export default function SugarProgress({
  sugarValue,
  setSugarValue,
}: {
  sugarValue: number;
  setSugarValue: (value: number) => void;
}) {
  const sliderColor =
    sugarValue <= 40 ? "#2A732E" : sugarValue <= 80 ? "#F59E0B" : "#EF4444";
  return (
    <View className="mt-5 rounded-3xl bg-white p-5 pb-6 pt-5">
      {/* Header */}
      <View className="flex-row items-center justify-between">
        <Text className="font-poppins font-medium text-sm text-black">
          Today&apos;s Sugar Progress
        </Text>

        <View className="flex-row items-center">
          <Text className="font-poppins text-sm text-[#2A732E]">Edit Goal</Text>

          <Ionicons
            name="create-outline"
            size={16}
            color="#2A732E"
            style={{ marginLeft: 4 }}
          />
        </View>
      </View>
      {/* Progress + Total Sugar */}
      <View className="mt-3 flex-row items-center justify-between">
        {/* Progress Circle */}
        <View className="items-center">
          <View className="h-40 w-40 items-center justify-center">
            <Svg width="160" height="160" viewBox="0 0 160 160">
              {/* Background circle */}
              <Circle
                cx="80"
                cy="80"
                r="64"
                stroke="#E5E7E5"
                strokeWidth="12"
                fill="none"
              />

              {/* Progress circle */}
              <Circle
                cx="80"
                cy="80"
                r="64"
                stroke="#2A732E"
                strokeWidth="12"
                fill="none"
                strokeDasharray="402"
                strokeDashoffset="129"
                strokeLinecap="round"
                rotation="-90"
                origin="80, 80"
              />
            </Svg>

            {/* Text in the middle */}
            <View className="absolute items-center">
              <Text className="font-poppins-bold text-4xl text-black">68%</Text>

              <Text className="font-poppins text-sm text-[#666]">
                of daily goal
              </Text>
            </View>
          </View>
        </View>

        {/* Total Sugar */}
        <View className="ml-4 flex-1">
          <Text className="font-poppins text-xs text-[#666]">Total Sugar</Text>

          <Text className="mt-1 font-poppins-bold text-2xl text-[#2A732E]">
            54g
            <Text className="font-poppins text-base text-[#666]">
              {" / 80g"}
            </Text>
          </Text>
          <View className="mt-2 self-start rounded-full bg-[#E8F5E9] px-3 py-1">
            <Text className="font-poppins-semibold text-xs text-[#2A732E]">
              On Track!
            </Text>
          </View>
          {/* Sugar Level Bar */}
          <View className="">
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={0}
              maximumValue={100}
              value={sugarValue}
              onValueChange={setSugarValue}
              minimumTrackTintColor={sliderColor}
              maximumTrackTintColor="#E5E7E5"
              thumbTintColor={sliderColor}
            />

            {/* Labels */}
            <View className=" flex-row justify-between">
              <View className="items-start">
                <Text className="font-poppins-medium text-xs text-[#2A732E]">
                  Low
                </Text>
                <Text className="font-poppins text-xs text-[#666]">0–40g</Text>
              </View>

              <View className="items-center">
                <Text className="font-poppins-medium text-xs text-[#F59E0B]">
                  Moderate
                </Text>
                <Text className="font-poppins text-xs text-[#666]">40–80g</Text>
              </View>

              <View className="items-end">
                <Text className="font-poppins-medium text-xs text-[#EF4444]">
                  High
                </Text>
                <Text className="font-poppins text-xs text-[#666]">80g+</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
