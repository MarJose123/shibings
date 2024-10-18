import {ScrollView, Text, View} from "react-native";
import React from "react";
import Title from "@/components/Title";
import BankCards from "@/components/banks/Cards";

export default function DashboardScreen() {
  return (
    <React.Fragment>
      <ScrollView className="flex">
          <Title title={'My Banks'} />
          <ScrollView horizontal={false} showsVerticalScrollIndicator={false} className="flex mx-2 mt-10 space-x-10 ">
              <BankCards balance={23581} bankName={'Gcash'} monthYear={'Oct. 2024'} />
              <View className="py-4" />
              <BankCards balance={15850} bankName={'Maya'} monthYear={'Oct. 2024'} />
              <View className="py-4" />
              <BankCards balance={6080} bankName={'BPI'} monthYear={'Oct. 2024'} />
              <View className="py-4" />
              <BankCards balance={12000} bankName={'BDO'} monthYear={'Oct. 2024'} />
              <View className="py-4" />
              <BankCards balance={48030.84} bankName={'UnionBank'} monthYear={'Oct. 2024'} />
          </ScrollView>
      </ScrollView>
    </React.Fragment>
  );
}
