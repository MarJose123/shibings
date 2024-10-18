import Header from "@/components/app/Header";
import { Navigator, Slot, Tabs } from "expo-router";
import React from "react";
import {Dimensions, Image, ScrollView, Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";

export default function AppLayout() {
  return (
    <React.Fragment>
        <SafeAreaView
            className="w-full flex justify-center h-full px-4 my-6 font-pbold antialiased text-sm"
            style={{
            minHeight: Dimensions.get("window").height - 100,
        }}>
            <ScrollView>
                <Header />
                <Slot />
            </ScrollView>
        </SafeAreaView>
        <StatusBar backgroundColor="#5faab1" style="light" />
    </React.Fragment>
  );
}
