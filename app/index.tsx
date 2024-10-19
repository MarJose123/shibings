import { Text, View } from "react-native";
import {Link, useRootNavigationState, useRouter} from "expo-router";
import React, {useEffect} from "react";
import {useAppStore} from "@/state/AppStore";
import Intro from "@/app/intro";
import DashboardScreen from "@/app/(app)/dashboard";

export default function Index() {
    const router = useRouter();
    const navigationState = useRootNavigationState();
    const isFirstLaunch = useAppStore((state) => state.isFirstLaunch())

    useEffect(() => {
        if (!navigationState?.key) return;
        if (isFirstLaunch) {
           return  router.push('/intro')
        }
       return  router.push('/dashboard')
    }, [navigationState, isFirstLaunch]);
}
