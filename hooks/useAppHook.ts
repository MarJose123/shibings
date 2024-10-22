import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppLaunch } from "@/enums/AppLaunch";

export const useAppHook = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(false);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const resp = await AsyncStorage.getItem("isFirstLaunch");
      if (resp === null || resp === undefined || resp === AppLaunch.Yes) {
        AsyncStorage.setItem("isFirstLaunch", AppLaunch.Yes).then();
        setIsFirstLaunch(true);
      } else {
        AsyncStorage.setItem("isFirstLaunch", AppLaunch.No).then();
        setIsFirstLaunch(false);
      }
    };

    checkFirstLaunch().then();
  }, []);

  return {
    isFirstLaunch,
  };
};
