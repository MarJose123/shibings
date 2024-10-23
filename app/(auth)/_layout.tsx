import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      <Slot />
      <StatusBar style="dark" />
    </>
  );
};

export default AuthLayout;
