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

enum Pages {
  Dashboard = "/dashboard",
  Transactions = "/transactions",
  SOA = "/soa",
}

export default function AppLayout() {
  const pathname = usePathname();

  return (
      <SafeAreaView
        className="w-full flex justify-center h-full my-6 font-pbold antialiased text-sm px-2 py-10"
        style={{
          minHeight: Dimensions.get("window").height - 100,
        }}
      >
        <SafeAreaView className="w-full flex">
          <Header />
          <View className="flex flex-row gap-2">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
          <SafeAreaView className="flex mt-3">
            <Slot />
          </SafeAreaView>
        </SafeAreaView>
        <StatusBar style="light" />
      </SafeAreaView>
  );
}
