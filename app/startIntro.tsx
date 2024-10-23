import Onboarding from "react-native-onboarding-swiper";
import React, { useEffect } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import { router, useRootNavigationState } from "expo-router";

export default function IntroScreen() {
  const navigationState = useRootNavigationState();
  const [isPageOnLoad, setIsPageOnLoad] = React.useState(true);

  useEffect(() => {
    if (navigationState?.key) {
      setIsPageOnLoad(false);
    }
  }, [navigationState]);

  if (isPageOnLoad) {
    return <View className="bg-white" />;
  }

  const onDone = () => {
    return router.push("/endIntro");
  };

  return (
    <View className="container h-full justify-center bg-white">
      <Onboarding
        onSkip={onDone}
        onDone={onDone}
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
