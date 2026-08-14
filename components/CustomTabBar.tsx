import { Ionicons } from "@expo/vector-icons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const goToTab = (routeName: string) => {
    const route = state.routes.find((item) => item.name === routeName);

    if (!route) return;

    navigation.navigate(routeName);
  };

  const isActive = (routeName: string) => {
    const route = state.routes[state.index];
    return route?.name === routeName;
  };

  const TabItem = ({
    routeName,
    icon,
    label,
  }: {
    routeName: string;
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
  }) => {
    const active = isActive(routeName);

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => goToTab(routeName)}
        className="flex-1 items-center justify-center"
      >
        <Ionicons
          name={icon}
          size={20}
          color={active ? "#297D27" : "#777777"}
        />

        <Text
          className={`mt-1 text-xs ${
            active
              ? "font-semibold text-[#297D27]"
              : "font-medium text-gray-500"
          }`}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="absolute bottom-16 left-4 right-4 h-17.5">
      {/*  navigation container */}
      <View className="absolute bottom-0 left-0 right-0 h-12.5 flex-row items-center rounded-[10px] bg-white px-2 pb-1 pt-1 shadow-lg">
        <View className="flex-1 flex-row">
          <TabItem routeName="index" icon="home" label="Home" />

          <TabItem routeName="history" icon="time-outline" label="History" />
        </View>

        <View className="w-22.5" />

        <View className="flex-1 flex-row">
          <TabItem
            routeName="reports"
            icon="bar-chart-outline"
            label="Reports"
          />

          <TabItem routeName="profile" icon="person-outline" label="Profile" />
        </View>
      </View>

      {/*  Panda */}
      <TouchableOpacity
        activeOpacity={0.8}
        className="absolute left-1/2 top-0 h-15 w-15 -translate-x-1/2 items-center justify-center rounded-full bg-[#67AB4D]"
      >
        <Image
          source={require("../assets/images/panda-icon.png")}
          style={{ width: 38, height: 38 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
