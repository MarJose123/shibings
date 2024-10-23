import { Image, Text, View } from "react-native";
import React from "react";
import Icons from "@/components/Icons";

export default function AppHeader() {
  return (
    <View className="flex px-4 space-y-6">
      <View className="flex justify-between items-start flex-row mb-6">
        <View className="flex flex-row gap-3">
          <Image
            style={{ width: 40, height: 40 }}
            source={{ uri: "https://avatar.iran.liara.run/public" }}
            className="object-cover"
          />
          <View className="flex flex-col">
            <Text className="text-gray-100 italic">Hello,</Text>
            <Text className="text-2xl font-psemibold text-primary">
              John Doe
            </Text>
          </View>
        </View>
        <View className="flex mt-1.5 flex-row gap-2">
          <View>
            <Icons.notificationBell className="stroke-1 h-6 w-6 stroke-white" />
          </View>
          <View>
            <Icons.cogs className="stroke-1 h-6 w-6 stroke-white" />
          </View>
          <View>
            <Icons.logout className="stroke-1 h-6 w-6 stroke-white" />
          </View>
        </View>
      </View>
    </View>
  );
}
