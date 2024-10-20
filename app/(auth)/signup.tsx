import {router, Stack} from "expo-router";
import React, {useState} from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {Feather} from "@expo/vector-icons";
import Icons from "@/components/Icons";

export default function signUp() {
    const [form, setForm] = React.useState({
        name: '',
        email: "",
        password: "",
    })
    const [showPassword, setShowPassword] = useState(false);

  return (
    <React.Fragment>
      <View className="container h-full justify-center bg-white px-2">
          <View className="px-4 flex-col gap-4">
              <Text className="text-3xl font-pextrabold">Create Account</Text>
              <View>
                  <Text className="text-base text-secondary-950 font-pmedium">
                      Name
                  </Text>
                  <TextInput
                      className="text-secondary-950 font-psemibold text-base h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary"
                      value={form.name}
                      placeholderTextColor="#7B7B8B"
                      onChangeText={(e: any) => setForm({ ...form, name: e })}
                  />
              </View>
              <View>
                  <Text className="text-base text-secondary-950 font-pmedium">
                      Email
                  </Text>
                  <TextInput
                      className="text-secondary-950 font-psemibold text-base h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary"
                      value={form.email}
                      placeholderTextColor="#7B7B8B"
                      onChangeText={(e: any) => setForm({ ...form, email: e })}
                  />
              </View>
              <View>
                  <Text className="text-base text-secondary-950 font-pmedium">
                      PIN
                  </Text>
                  <View className="h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex-row items-center">
                      <TextInput
                          inputMode={'numeric'}
                          keyboardType={'number-pad'}
                          className="text-secondary-950 font-psemibold text-base flex-1"
                          value={form.password}
                          placeholderTextColor="#7B7B8B"
                          secureTextEntry={showPassword}
                          onChangeText={(e: any) => setForm({ ...form, password: e })}
                      />
                      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                          <View>
                              {showPassword ? <Feather name="eye" size={24} color="black" /> : <Feather name="eye-off" size={24} color="black" />}
                          </View>
                      </TouchableOpacity>
                  </View>
              </View>
              <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => router.push('/signup')}
                  className="items-center bg-primary rounded-xl min-h-[62px] justify-center"
              >
                  <View className="flex-row justify-between items-center">
                      <Text className="text-white font-pextrabold ">Create Account</Text>
                      <Icons.arrowRight
                          className="stroke-1 h-4 w-4 stroke-white ml-5"
                          fillClassName={"white"}
                      />
                  </View>
              </TouchableOpacity>

          </View>
      </View>
    </React.Fragment>
  );
}
