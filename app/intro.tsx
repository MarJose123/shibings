import Onboarding from "react-native-onboarding-swiper";
import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

export default function Intro() {

  const onDone = () => {};

  // return <SliderIntro navContainerMaxSizePercent={0.3} limitToSlide={1} data={slides} onDone={onDone} onSkip={onDone} />;
  return (
    <View className="container h-full justify-center">
      <Onboarding
        pages={[
          {
            backgroundColor: "#fef3c7",
            image: (
              <View>
                <LottieView
                  source={require("../assets/images/intro/piggyBank.json")}
                  style={{
                    width: 390,
                    height: 390,
                  }}
                  autoPlay
                />
              </View>
            ),
            title: "Save Smart with Your Piggy Bank",
            subtitle:
              "Watch your savings grow and achieve your financial goals effortlessly",
          },
          {
            backgroundColor: "#a7f3d0",
            image: (
              <View>
                <LottieView
                  source={require("../assets/images/intro/Transactions.json")}
                  style={{
                    width: 390,
                    height: 390,
                  }}
                  autoPlay
                />
              </View>
            ),
            title: "Analyze Your Expenses",
            subtitle:
              "Get insights into your spending habits and optimize your budget",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <LottieView
                  source={require("../assets/images/intro/ScheduleBilling.json")}
                  style={{
                    width: 390,
                    height: 390,
                  }}
                  autoPlay
                />
              </View>
            ),
            title: "Master Your Billing Schedule",
            subtitle: "Stay ahead of payments and never miss a due date again",
          },
        ]}
      />
    </View>
  );
}
