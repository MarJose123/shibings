import React, { useEffect, useState } from "react";
import LoadingScreen from "@/components/Loader";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as EmailValidator from "email-validator";
import SmoothPinCodeInput from "@dreamwalk-os/react-native-smooth-pincode-input";
import Ionicons from "@expo/vector-icons/Ionicons";
import Icons from "@/components/Icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";
import { useSecureStore } from "@/hooks/useSecureStore";
import { useAccount } from "@/hooks/useAccount";
import Toast from "react-native-toast-message";

export default function SignIn() {
  const [loadingText, setLoadingText] = useState("Loading...");
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [biometricType, setBiometricType] = useState("");
  const [isBiometricEnabled, setIsBiometricEnabled] = useState(false);

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

  useEffect(() => {
    const checkBiometricSupport = async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);

      if (compatible) {
        const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
        if (savedBiometrics) {
          const types =
            await LocalAuthentication.supportedAuthenticationTypesAsync();
          if (
            types.includes(
              LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION,
            )
          ) {
            setBiometricType("Face ID");
          } else if (
            types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT)
          ) {
            setBiometricType("Touch ID");
          } else {
            setBiometricType("Biometrics");
          }
        }
      }

      const biometricEnabled = await AsyncStorage.getItem(
        "biometricAuthStatus",
      );
      if (biometricEnabled) {
        const parsedStatus = JSON.parse(biometricEnabled);
        setIsBiometricEnabled(
          parsedStatus.isFaceIDEnabled || parsedStatus.isTouchIDEnabled,
        );
      }
    };

    checkBiometricSupport().then();
  }, []);

  const onSubmit = async (data: any) => {};
  const onBiometricLogin = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: `Login with Touch ID`,
        fallbackLabel: "Enter password",
      });
      if (result.success) {
        const storedEmail = await useSecureStore().get("userEmail");
        const storedPassword = await useSecureStore().get("userPin");
        if (storedEmail && storedPassword) {
          await useAccount().loginAccount({
            email: storedEmail,
            password: storedPassword,
          });
        } else {
          Toast.show({
            type: "error",
            text1: "No credentials found. Please log in manually.",
          });
          setIsBiometricSupported(false);
        }
      } else {
        Toast.show({
          type: "error",
          text1: "Biometric authentication failed.",
        });
      }
    } catch (error) {
      console.log("Biometric authentication error:", error);
      Toast.show({
        type: "error",
        text1: "An error occurred during biometric authentication.",
      });
    }
  };

  return (
    <React.Fragment>
      <LoadingScreen visible={isSubmitting} textContent={loadingText} />
      <View className="container h-full justify-center bg-white px-2">
        <View className="px-4 flex-col gap-4">
          <Text className="text-3xl font-pextrabold">Sign In to Shibings</Text>
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
              className={`${errors.email ? "border-red-400" : "border-black-200"}`}
            >
              <Controller
                control={control}
                rules={{
                  required: true,
                  maxLength: 6,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <SmoothPinCodeInput
                    placeholder={
                      <View
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: 25,
                          opacity: 0.3,
                          backgroundColor: "blue",
                        }}
                      ></View>
                    }
                    mask={
                      <View
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: 25,
                          backgroundColor: "blue",
                        }}
                      ></View>
                    }
                    maskDelay={1000}
                    password={true}
                    cellStyle={null}
                    codeLength={6}
                    cellStyleFocused={null}
                    value={value}
                    onTextChange={onChange}
                  />
                )}
                name="password"
              />
            </View>
            {errors.password && errors.password?.type == "required" && (
              <Text className="text-red-400">PIN is required.</Text>
            )}
            {errors.password && errors.password?.type == "maxLength" && (
              <Text className="text-red-400">
                PIN is too long. max length is 6 digit.
              </Text>
            )}
          </View>
          <View>
            {isBiometricSupported && isBiometricEnabled && (
              <TouchableOpacity
                activeOpacity={0.7}
                className="items-center bg-blue-500 rounded-xl min-h-[62px] justify-center"
                onPress={async () => await enableBiometricAuth("TouchID")}
              >
                <View className="flex-row space-x-2 items-center">
                  <Ionicons name={"finger-print"} size={24} color={"white"} />
                  <Text className="text-white font-pbold">
                    Login with Biometrics
                  </Text>
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
                Login with PIN
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
