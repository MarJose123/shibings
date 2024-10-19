import Header from "@/components/app/Header";
import { router, Slot, usePathname } from "expo-router";
import React from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

enum Pages {
  Dashboard = "/dashboard",
  Transactions = "/transactions",
  SOA = "/soa",
}

export default function AppLayout() {
  const pathname = usePathname();

  return (
    <LinearGradient
      colors={["#000000", "#3d4b12"]}
      start={{ x: 0.5, y: 0.5 }} // Start closer to the center
      end={{ x: 1.2, y: -0.2 }} // Push further beyond the top-right corner
      // Adjust color stops to create more of a circular shape
      locations={[0.3, 0.6]}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SafeAreaView
        className="font-pbold max-h-screen"
        style={{
          minHeight: Dimensions.get("window").height,
        }}
      >
        <View>
          <Header />
          <View className="flex flex-row gap-2">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="gap-2"
            >
              <TouchableOpacity
                className={"border-1 rounded-full bg-gray-900 ring-slate-600"}
                onPress={() => {
                  router.push(Pages.Dashboard);
                }}
              >
                <Text
                  className={`${pathname == Pages.Dashboard ? "text-white" : "text-gray-500"} font-pregular p-2 px-6`}
                >
                  My Accounts
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className={"border-1 rounded-full bg-gray-900 ring-slate-600"}
                onPress={() => {
                  router.push(Pages.Transactions);
                }}
              >
                <Text
                  className={`${pathname == Pages.Transactions ? "text-white" : "text-gray-500"} font-pregular p-2 px-6`}
                >
                  Transactions
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="border-1 rounded-full bg-gray-900 ring-slate-600"
                onPress={() => {
                  router.push(Pages.SOA);
                }}
              >
                <Text
                  className={`${pathname == Pages.SOA ? "text-white" : "text-gray-500"} font-pregular p-2 px-6`}
                >
                  Statement of Accounts
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          {/* Display Area */}
          <View className="mt-10 px-3">
            <Slot />
          </View>
        </View>
        <StatusBar style="light" />
      </SafeAreaView>
    </LinearGradient>
  );
}
