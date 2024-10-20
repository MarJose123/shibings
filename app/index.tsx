import { Text, View } from "react-native";
import {Link, useRootNavigationState, useRouter} from "expo-router";
import React, {useEffect} from "react";
import {useAppStore} from "@/state/AppStore";

export default function Index() {
    const router = useRouter();
    const navigationState = useRootNavigationState();
    const isFirstLaunch = useAppStore((state) => state.isFirstLaunch())

    useEffect(() => {
        if (!navigationState?.key) return;
        if (isFirstLaunch) {
           return  router.replace('/startIntro')
        }
       return  router.replace('/dashboard')
    }, [navigationState, isFirstLaunch]);
}
