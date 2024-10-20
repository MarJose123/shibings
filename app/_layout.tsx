import { Slot, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import migrations from "@/db/migrations/migrations";
import {useMigrations} from "drizzle-orm/expo-sqlite/migrator";
import {db} from "@/db/connection/connection";

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

  const { success: migrationSuccess, error: migrationError } = useMigrations(db, migrations);

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      console.log("Fonts has been loaded successfully.");
    }
    if(migrationSuccess){
      console.log("DB migration loaded successfully.");
    }
    if(fontsLoaded && migrationSuccess) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error, migrationSuccess, migrationError]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return <Slot />;
}
