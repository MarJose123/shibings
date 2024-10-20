import {create} from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AppLaunch} from "@/enums/AppLaunch";

interface AppInterface {
    isFirstLaunch: () => boolean;
}


export const useAppStore = create<AppInterface>((set) => ({
    isFirstLaunch: () => {
        try {
            let value;
             AsyncStorage.getItem('isFirstLaunch').then(resp => value = resp);
            if (value === null || value === undefined || value === '1') {
                AsyncStorage.setItem('isFirstLaunch', AppLaunch.Yes).then();
                return true;
            }
            console.log(value)
            AsyncStorage.setItem('isFirstLaunch', AppLaunch.No).then();
            return false;
        } catch (error) {
            console.log(error);
            AsyncStorage.setItem('isFirstLaunch', AppLaunch.No).then();
            return true;
        }
    }

}))
