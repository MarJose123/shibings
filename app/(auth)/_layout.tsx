import {Slot, Stack} from "expo-router";
import { SafeAreaView } from "react-native";
import {StatusBar} from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
        <Slot />
       <StatusBar style="dark" />
    </>
  );
};

export default AuthLayout;
