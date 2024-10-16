import {Text, View} from "react-native";
import {router} from "expo-router";
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
              <Text onPress={() => router.push('/sign-in')}>Go to login</Text>
          </View>
      </React.Fragment>

  );
}
