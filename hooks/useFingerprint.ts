import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";
import Toast from "react-native-toast-message";

interface BiometricAuthStatus {
  isFaceIDEnabled: boolean;
  isTouchIDEnabled: boolean;
}

export const useFingerprint = () => {
  const [retryCount, setRetryCount] = React.useState(3);
  const [biometricAuth, setBiometricAuth] = useState<BiometricAuthStatus>({
    isFaceIDEnabled: false,
    isTouchIDEnabled: false,
  });

  const [availableBiometrics, setAvailableBiometrics] = useState<
    LocalAuthentication.AuthenticationType[]
  >([]);

  const checkAvailableBiometrics = async () => {
    try {
      const biometrics =
        await LocalAuthentication.supportedAuthenticationTypesAsync();
      setAvailableBiometrics(biometrics);
    } catch (error) {
      console.log(error);
    }
  };

  const enableBiometricAuth = async (): Promise<boolean> => {
    try {
      const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
      if (!isBiometricAvailable) {
        Toast.show({
          type: "error",
          text1: "Your device does not support biometric authentication.",
        });
        return false;
      }

      const savedBiometric = await LocalAuthentication.isEnrolledAsync();
      if (!savedBiometric) {
        Toast.show({
          type: "error",
          text1: "No biometric records found.",
        });
        return false;
      }

      const result =  await authenticateBiometric();
      if(result){
        setBiometricAuth((prevState) => {
          const updatedState = { ...prevState };

          updatedState.isTouchIDEnabled = !prevState.isTouchIDEnabled;
          Toast.show({
            type: "success",
            text1: `Biometric Login ${updatedState.isTouchIDEnabled ? "enabled" : "disabled"} successfully.`,
          });
          // Save the updated status
          AsyncStorage.setItem(
              "biometricAuthStatus",
              JSON.stringify(updatedState),
          );
          return updatedState;
        });
      }

      return result;
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "An error occurred while enabling biometric authentication.",
      });
      return false;
    }
  };

  const authenticateBiometric = async () => {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate with biometrics",
      fallbackLabel: "Enter password",
    });

    if (result.success) {
      return true;
    } else {
      if (retryCount <= 0) return false;
      setRetryCount((prevState) => prevState--);
      switch (result.error) {
        case "lockout":
          Toast.show({
            type: "error",
            text1: "Authentication with Biometric Authentication Lockout",
          });
          return false;
        case "authentication_failed" || "too_fast":
          await enableBiometricAuth();
          return false;
        case "user_cancel":
          return false;
        default:
          return false;
      }
    }
  };

  const checkIfBiometricEnabled = async (): Promise<void> => {
    const biometricStatus = await AsyncStorage.getItem("biometricAuthStatus");
    if (biometricStatus) {
      const parsedStatus: BiometricAuthStatus = JSON.parse(biometricStatus);
      setBiometricAuth(parsedStatus);
    } else {
      setBiometricAuth({
        isFaceIDEnabled: false,
        isTouchIDEnabled: false,
      });
    }
  };

  useEffect(() => {
    checkAvailableBiometrics();
    checkIfBiometricEnabled();
  }, []);

  return {
    biometricAuth,
    enableBiometricAuth,
    checkIfBiometricEnabled,
    availableBiometrics,
    authenticateBiometric,
  };
};
