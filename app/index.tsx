import { useRootNavigationState, useRouter } from "expo-router";
import { useEffect } from "react";
import { useAppHook } from "@/hooks/useAppHook";

export default function Index() {
  const router = useRouter();
  const navigationState = useRootNavigationState();
  const isFirstLaunch = useAppHook().isFirstLaunch;

  useEffect(() => {
    if (!navigationState?.key) return;
    if (isFirstLaunch) {
      return router.replace("/startIntro");
    }
    return router.replace("/Sign-in");
  }, [navigationState, isFirstLaunch, router]);
}
