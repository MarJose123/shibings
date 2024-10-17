import { Text, View } from "react-native";
import {Link, router} from "expo-router";
import React from "react";

export default function Index() {
  return (
    <React.Fragment>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Edit app/index.tsx to edit this screen.</Text>
        <Link  href="/dashboard">Go to Dashboard</Link>
      </View>
    </React.Fragment>
  );
}
