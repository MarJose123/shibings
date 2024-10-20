import { Text, TouchableOpacity, View } from "react-native";
import LottieView from "lottie-react-native";
import React from "react";
import Icons from "@/components/Icons";

export default function EndIntroScreen() {
  return (
    <View className="container h-full justify-center bg-white items-center px-2">
      <View>
        <LottieView
          source={require("../assets/images/intro/GettingStarted.json")}
          style={{
            width: 390,
            height: 390,
          }}
          autoPlay
        />
      </View>
      <View className="text-center gap-5">
        <Text className="text-3xl font-pextrabold text-center">
          Kickstart Your Financial Journey
        </Text>
        <Text className="text-center text-lg">
          A Step-by-Step Guide to Mastering Your Money Management with Ease
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          className="items-center bg-primary rounded-xl min-h-[62px] justify-center"
        >
          <View className="flex-row justify-between items-center">
            <Text className="text-white font-pextrabold ">Get Started</Text>
            <Icons.arrowRight
              className="stroke-1 h-4 w-4 stroke-white ml-5"
              fillClassName={"white"}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
