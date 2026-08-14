import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function QuickActions() {
  return (
    <View className="mt-4 flex-row items-center justify-between rounded-2xl bg-white px-2 py-3">
      {/* Scan Food */}
      <TouchableOpacity
        className="flex-1 flex-row items-center justify-center"
        activeOpacity={0.7}
      >
        <View className="mr-2 h-8 w-8 items-center justify-center rounded-full bg-green-50">
          <Ionicons name="camera-outline" size={20} color="#3F9142" />
        </View>

        <Text className="text-xs font-semibold text-gray-900">Scan Food</Text>
      </TouchableOpacity>

      {/* Add Food */}
      <TouchableOpacity
        className="flex-1 flex-row items-center justify-center"
        activeOpacity={0.7}
      >
        <View className="mr-2 h-8 w-8 items-center justify-center rounded-full bg-green-50">
          <Ionicons name="add" size={20} color="#3F9142" />
        </View>

        <Text className="text-xs font-semibold text-gray-900">Add Food</Text>
      </TouchableOpacity>

      {/* Ask Coach */}
      <TouchableOpacity
        className="flex-1 flex-row items-center justify-center"
        activeOpacity={0.7}
      >
        <View className="mr-2 h-8 w-8 items-center justify-center rounded-full bg-green-50">
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={20}
            color="#3F9142"
          />
        </View>

        <Text className="text-xs font-semibold text-gray-900">Ask Coach</Text>
      </TouchableOpacity>
    </View>
  );
}
