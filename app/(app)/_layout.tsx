import {Navigator, Slot, Tabs} from 'expo-router';
import React from "react";
import {Image, Text, View} from "react-native";

export default function AppLayout()
{


    return (
        <React.Fragment>
            <View className="" style={{flex: 1,  justifyContent: "center",
                alignItems: "center",}}>
                <View className="flex w-full h-full flex-row" style={{flex: 1,  justifyContent: "center",
                    alignItems: "center",}}>
                    <Image style={{flex: 1}}
                        source={{ uri: "https://ui-avatars.com/api/?name=John+Doe"}}
                    />
                    <Text style={{flex: 1}}>asds</Text>
                </View>
            </View>
            <Slot />

        </React.Fragment>

    )
}
