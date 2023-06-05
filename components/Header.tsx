import { View, Text } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Header = () => {
  return (
    <View className="flex flex-row justify-between mt-10 px-5 items-center">
      <View className="bg-primaryColor rounded-full p-[5px]">
        <Feather name="user" size={30} color="white" />
      </View>
      <View>
        <Text className="font-medium text-[18px]">Hi Haris</Text>
      </View>
      <View className="bg-primaryColor rounded-full p-[5px]">
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={30}
          color="white"
        />
      </View>
    </View>
  );
};

export default Header;
