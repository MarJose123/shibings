import {Image, Text, View} from "react-native";
import React from "react";

export default function AppHeader()
{


 return (
     <View className="w-full flex">
         <View className="flex w-vh h-vh flex-row gap-3">
             <Image
                 style={{width: 40, height: 40}}
                 source={{ uri: "https://avatar.iran.liara.run/public"}}
                 className='object-cover'
             />
             <View className="flex flex-col">
                 <Text className="text-gray-100 italic">Hello,</Text>
                 <Text className="text-2xl text-primary font-pbold font-bold" >John Doe</Text>
             </View>
         </View>
     </View>
 )
}
