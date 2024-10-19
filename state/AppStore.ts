import {create} from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AppInterface {
    isFirstLaunch: () => boolean;
}


export const useAppStore = create<AppInterface>((set) => ({
    isFirstLaunch: () => {
        try {
            let value;
             AsyncStorage.getItem('isFirstLaunch').then(resp => value = resp);
            if (value === null || value === undefined) {
                AsyncStorage.setItem('isFirstLaunch', '0').then();
                return true;
            }
            console.log(value)
            AsyncStorage.setItem('isFirstLaunch', '0').then();
            return false;
        } catch (error) {
            console.log(error);
            AsyncStorage.setItem('isFirstLaunch', '0').then();
            return true;
        }
    }

}))
