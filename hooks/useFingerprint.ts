import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as LocalAuthentication from 'expo-local-authentication';
import Toast from "react-native-toast-message";


interface BiometricAuthStatus {
    isFaceIDEnabled: boolean;
    isTouchIDEnabled: boolean;
}

export const useFingerprint = () => {
    const [biometricAuth, setBiometricAuth] = useState<BiometricAuthStatus>({
        isFaceIDEnabled: false,
        isTouchIDEnabled: false,
    });

    const [availableBiometrics, setAvailableBiometrics] = useState<LocalAuthentication.AuthenticationType[]>([]);

    const checkAvailableBiometrics = async () => {
        try {
            const biometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();
            setAvailableBiometrics(biometrics);
        } catch (error) {
            console.log(error);
        }
    };

    const enableBiometricAuth = async (biometricType: 'FaceID' | 'TouchID'): Promise<boolean> => {
        try {
            const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
            if (!isBiometricAvailable) {
                Toast.show({
                    type:'error',
                    text1: 'Your device does not support biometric authentication.'
                });
                return false;
            }

            const savedBiometric = await LocalAuthentication.isEnrolledAsync();
            if (!savedBiometric) {
                Toast.show({
                    type:'error',
                    text1: 'No biometric records found.'
                });
                return false;
            }

            const result = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Authenticate with biometrics',
                fallbackLabel: 'Enter password',
            });

            if (result.success) {
                setBiometricAuth((prevState) => {
                    const updatedState = { ...prevState };
                    if (biometricType === 'FaceID') {
                        updatedState.isFaceIDEnabled = !prevState.isFaceIDEnabled;
                        Toast.show({
                            type:'success',
                            text1: `Face ID ${updatedState.isFaceIDEnabled ? 'enabled' : 'disabled'} successfully.`
                        });
                    } else if (biometricType === 'TouchID') {
                        updatedState.isTouchIDEnabled = !prevState.isTouchIDEnabled;
                        Toast.show({
                            type:'success',
                            text1: `Touch ID ${updatedState.isTouchIDEnabled ? 'enabled' : 'disabled'} successfully.`
                        });
                    }
                    // Save the updated status
                    AsyncStorage.setItem('biometricAuthStatus', JSON.stringify(updatedState));
                    return updatedState;
                });

                return true;
            } else {
                Toast.show({
                    type:'error',
                    text1: 'Authentication failed.'
                });
                return false;
            }
        } catch (error) {
            console.log(error);
            Toast.show({
                type:'error',
                text1: 'An error occurred while enabling biometric authentication.'
            });
            return false;
        }
    };

    const checkIfBiometricEnabled = async (): Promise<void> => {
        const biometricStatus = await AsyncStorage.getItem('biometricAuthStatus');
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
    };
};
