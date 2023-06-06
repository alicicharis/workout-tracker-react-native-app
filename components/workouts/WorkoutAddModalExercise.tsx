import { View, Text } from "react-native";
import React from "react";
import { MinusCircleIcon } from "react-native-heroicons/solid";

const WorkoutAddModalExercise = () => {
  return (
    <View className="flex flex-row bg-primaryColor rounded-[12px] justify-between items-center p-2 mt-2">
      <Text className="text-white font-medium text-[16px]">Exercise Name</Text>
      <MinusCircleIcon color="white" size={30} />
    </View>
  );
};

export default WorkoutAddModalExercise;
