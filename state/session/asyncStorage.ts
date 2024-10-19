import {create} from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAsyncStorage = create((set) => ({
    appLaunch: {
        isFirstLaunch: true,
        initialize: async () => {
            try {
                const value = await AsyncStorage.getItem('isFirstLaunch')
                if (value === null) {
                    set({appLaunch: {isFirstLaunch: false}});
                }
                await AsyncStorage.setItem('isFirstLaunch', '0');
            } catch (error) {
                console.log(error);
                await AsyncStorage.setItem('isFirstLaunch', '0');
            }
        }
    }

}))
