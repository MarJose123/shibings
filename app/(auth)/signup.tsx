import React, { useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput, Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Icons from "@/components/Icons";
import { Controller, useForm } from "react-hook-form";
import * as EmailValidator from "email-validator";
import LoadingScreen from "@/components/Loader";
import { useRouter } from "expo-router";
import * as LocalAuthentication from "expo-local-authentication";
import { useFingerprint } from "@/hooks/useFingerprint";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function signUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading...");
  const { biometricAuth, enableBiometricAuth, availableBiometrics } =
    useFingerprint();
  const router = useRouter();
  const isFaceIdAvailable = availableBiometrics.includes(
    LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION,
  );
  const isTouchIDAvailable = availableBiometrics.includes(
    LocalAuthentication.AuthenticationType.FINGERPRINT,
  );
  const isAnyBiometricAvailable = isFaceIdAvailable || isTouchIDAvailable;

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    // return router.replace('/sign-in')
  };

  return (
    <React.Fragment>
      <LoadingScreen visible={isSubmitting} textContent={loadingText} />
      <View className="container h-full justify-center bg-white px-2">
        <View className="px-4 flex-col gap-4">
          <Text className="text-3xl font-pextrabold">Create Account</Text>
          <View>
            <Text className="text-base text-secondary-950 font-pmedium">
              Name
            </Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className={`text-secondary-950 font-psemibold text-base h-16 px-4 bg-black-100 rounded-2xl border-2 ${errors.name ? "border-red-400" : "border-black-200"} focus:border-secondary`}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholderTextColor="#7B7B8B"
                />
              )}
              name="name"
            />
            {errors.name && errors.name?.type == "required" && (
              <Text className="text-red-400">Name is required.</Text>
            )}
          </View>
          <View>
            <Text className="text-base text-secondary-950 font-pmedium">
              Email
            </Text>
            <Controller
              control={control}
              rules={{
                required: true,
                validate: (value) => {
                  return EmailValidator.validate(value);
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className={`${errors.email ? "border-red-400" : "border-black-200"} text-secondary-950 font-psemibold text-base h-16 px-4 bg-black-100 rounded-2xl border-2 focus:border-secondary`}
                  value={value}
                  onBlur={onBlur}
                  placeholderTextColor="#7B7B8B"
                  onChangeText={onChange}
                />
              )}
              name="email"
            />
            {errors.email && errors.email?.type == "required" && (
              <Text className="text-red-400">Email is required.</Text>
            )}
            {errors.email && errors.email?.type == "validate" && (
              <Text className="text-red-400">Invalid email address.</Text>
            )}
          </View>
          <View>
            <Text className="text-base text-secondary-950 font-pmedium">
              PIN
            </Text>
            <View
              className={`${errors.email ? "border-red-400" : "border-black-200"} h-16 px-4 rounded-2xl border-2 border-black-200 focus:border-secondary flex-row items-center`}
            >
              <Controller
                control={control}
                rules={{
                  required: true,
                  maxLength: 4,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    inputMode={"numeric"}
                    keyboardType={"number-pad"}
                    className="text-secondary-950 font-psemibold text-base flex-1"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    placeholderTextColor="#7B7B8B"
                    secureTextEntry={showPassword}
                    maxLength={4}
                  />
                )}
                name="password"
              />

              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <View>
                  {showPassword ? (
                    <Feather name="eye" size={24} color="black" />
                  ) : (
                    <Feather name="eye-off" size={24} color="black" />
                  )}
                </View>
              </TouchableOpacity>
            </View>
            {errors.password && errors.password?.type == "required" && (
              <Text className="text-red-400">PIN is required.</Text>
            )}
            {errors.password && errors.password?.type == "maxLength" && (
              <Text className="text-red-400">
                PIN is too long. max length is 4 digit.
              </Text>
            )}
          </View>
          <View>
            {isTouchIDAvailable && (
                <TouchableOpacity
                    activeOpacity={0.7}
                    className="items-center bg-blue-500 rounded-xl min-h-[62px] justify-center"
                    onPress={async () => await enableBiometricAuth('TouchID') }
                >
                  <View className='flex-row space-x-2 items-center'>
                    <Ionicons name={'finger-print'} size={24}/>
                    <Text className='text-white font-pbold'>{biometricAuth.isTouchIDEnabled
                        ? "Touch ID Enabled"
                        : "Enable Touch ID"}</Text>
                  </View>
                </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            className="items-center bg-primary rounded-xl min-h-[62px] justify-center"
          >
            <View className="flex-row justify-between items-center">
              <Text className="text-white font-pextrabold ">
                Create Account
              </Text>
              {!isSubmitting ? (
                <Icons.arrowRight
                  className="stroke-1 h-4 w-4 stroke-white ml-5"
                  fillClassName={"white"}
                />
              ) : (
                <ActivityIndicator
                  animating={true}
                  color="#fff"
                  size="small"
                  className="ml-2"
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
}
