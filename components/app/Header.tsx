import {Image, Text, View} from "react-native";
import React from "react";
import Icons from "../Icons";
import Svg, {Path} from "react-native-svg";
import {SafeAreaView} from "react-native-safe-area-context";

export default function AppHeader()
{


 return (
   <SafeAreaView className="flex my-5 px-4 space-y-6">
     <SafeAreaView className="flex justify-between items-start flex-row mb-6">
       <SafeAreaView className="flex flex-row gap-3">
         <Image
           style={{ width: 40, height: 40 }}
           source={{ uri: "https://avatar.iran.liara.run/public" }}
           className="object-cover"
         />
         <View className="flex flex-col">
           <Text className="text-gray-100 italic">Hello,</Text>
           <Text className="text-2xl font-psemibold  text-primary">
             John Doe
           </Text>
         </View>
       </SafeAreaView>
       <SafeAreaView className="flex mt-1.5 flex-row gap-2">
         <View>
           <Svg
             fill="none"
             viewBox="0 0 24 24"
             className="stroke-1 h-6 w-6 stroke-white"
           >
             <Path
               stroke-linecap="round"
               stroke-linejoin="round"
               d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
             />
           </Svg>
         </View>
         <View>
           <Svg
             fill="currentColor"
             viewBox="0 0 24 24"
             className="stroke-1 h-6 w-6 stroke-white"
           >
             <Path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
             />
             <Path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
             />
           </Svg>
         </View>
       </SafeAreaView>
     </SafeAreaView>
   </SafeAreaView>
 );
}
