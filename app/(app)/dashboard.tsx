import {Dimensions, FlatList, ScrollView, Text, View} from "react-native";
import React from "react";
import Title from "@/components/Title";
import BankCards from "@/components/banks/Cards";

export default function DashboardScreen() {
  return (
    <View className={`px-3 h-[600]`}>
      <Title title={"My Banks"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex mt-10"
        style={{ flexGrow: 0 }}
        contentContainerStyle={{ flex: 0 }}
        scrollEnabled
      >
        <BankCards balance={23581} bankName={"Gcash"} monthYear={"Oct. 2024"} />
        <BankCards balance={15850} bankName={"Maya"} monthYear={"Oct. 2024"} />
        <BankCards balance={6080} bankName={"BPI"} monthYear={"Oct. 2024"} />
        <BankCards balance={12000} bankName={"BDO"} monthYear={"Oct. 2024"} />
        <BankCards
          balance={48030.84}
          bankName={"UnionBank"}
          monthYear={"Oct. 2024"}
        />
      </ScrollView>
    </View>
  );
}
