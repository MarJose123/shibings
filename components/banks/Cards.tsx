import { Text, TouchableOpacity, View } from "react-native";
import Icons from "@/components/Icons";
import React from "react";
import currency from "currency.js";

type BankCardProps = {
  bankName: string;
  monthYear: string;
  balance: number;
}

export default function BankCards(props: BankCardProps) {
  return (
    <View className="border rounded-lg w-[300] backdrop-blur-sm bg-[#0d1216] drop-shadow-md">
      <View className="p-3">
        <View className="flex flex-col gap-2">
          <View className="flex flex-row flex-wrap justify-between">
            <Text className="text-white font-pbold text-2xl">{props.bankName}</Text>
            <TouchableOpacity>
              <Icons.eye className="stroke-1 h-6 w-6 stroke-white" />
            </TouchableOpacity>
          </View>
          <Text className="text-white text-xs font-pthin">
            as of {props.monthYear}
          </Text>

          <View>
            <Text className="text-white font-pbold text-2xl">
              {currency(props.balance, {
                decimal: ".",
                separator: ",",
                symbol: "₱",
              }).format()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
