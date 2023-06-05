import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ClockIcon } from "react-native-heroicons/solid";
import { useRouter } from "expo-router";

interface WorkoutCardProps {
  id: number;
  name: string;
}

const WorkoutCard = ({ id, name }: WorkoutCardProps) => {
  const router = useRouter();

  const clickHandler = (id: number) => {
    router.push(`/workout/${id}`);
  };

  return (
    <TouchableOpacity onPress={() => clickHandler(id)}>
      <View
        key={id}
        className="flex flex-col bg-primaryColor w-40 rounded-[16px] justify-center items-center mr-5 "
      >
        <Image
          source={require("../../assets/images/liftimage.png")}
          className="h-40 w-36 rounded-[16px] mt-2"
        />
        <Text className="text-white font-medium text-[18px] my-1">{name}</Text>
        <View className="flex flex-row items-center mb-2 w-full justify-center">
          <ClockIcon color="red" fill="white" size={20} />
          <Text className="text-white text-[16px] font-medium ml-1">45-60</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WorkoutCard;
