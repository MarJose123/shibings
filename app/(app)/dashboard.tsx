import { Text, View } from "react-native";
import React from "react";
import Title from "@/components/Title";
import BankCards from "@/components/banks/Cards";

export default function DashboardScreen() {
  return (
    <React.Fragment>
      <View>
          <Title title={'My Banks'} />
          <View className="flex mx-5 mt-10">
              <BankCards balance={23581} bankName={'Gcash'} monthYear={'Oct. 2024'} />
          </View>
      </View>
    </React.Fragment>
  );
}
