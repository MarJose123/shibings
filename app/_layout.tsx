import {Slot, SplashScreen, Stack} from "expo-router";
import * as eva from "@eva-design/eva";
import {ApplicationProvider} from "@ui-kitten/components";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import {LinearGradient} from "expo-linear-gradient";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <LinearGradient
          colors={['#000000', '#3d4b12']}
          start={{ x: 0.5, y: 0.5 }}  // Start closer to the center
          end={{ x: 1.2, y: -0.2 }}   // Push further beyond the top-right corner
          // Adjust color stops to create more of a circular shape
          locations={[0.3, 0.6]}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
      >
        <Slot />
      </LinearGradient>
    </ApplicationProvider>
  );
}
