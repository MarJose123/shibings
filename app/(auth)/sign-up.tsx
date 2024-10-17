import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function SignIn() {
  return (
    <React.Fragment>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack.Screen
          options={{
            headerTitle: "Sign In",
          }}
        />
        <Text>Sign Up</Text>
      </View>
    </React.Fragment>
  );
}
