import {Text, View} from "react-native";
import React from "react";
import {router} from "expo-router";
import BillingsScreen from "@/app/(app)/billings";

export default function DashboardScreen() {
    return (
        <React.Fragment>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text>This is the Dashboard</Text>
            </View>
        </React.Fragment>
    )
}
