import { Text, View } from "react-native";
import React from "react";
import Title from "@/components/Title";

export default function DashboardScreen() {
  return (
    <React.Fragment>
      <View>
          <Title title={'My Banks'} />
      </View>
    </React.Fragment>
  );
}
