import { Link } from "expo-router";
import React, { useState } from "react";
import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";

export default function SignIn() {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="bg-slate-100 h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Text className="text-2xl font-semibold text-secondary-950 mt-10 font-psemibold">
            Log in to Shibings
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyles="mt-7 text-primary"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={() => null}
            containerStyles="mt-7"
            isLoading={isSubmitting}
            textStyles="text-secondary-200"
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-secondary-700 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/app/(auth)/signup"
              className="text-lg font-psemibold text-primary"
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
