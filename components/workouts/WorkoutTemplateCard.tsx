import { View, Text, Image } from "react-native";
import React from "react";
import { PencilIcon } from "react-native-heroicons/solid";

interface WorkoutTemplateCardProps {
  id: number;
  name: string;
}

const WorkoutTemplateCard = ({ id, name }: WorkoutTemplateCardProps) => {
  return (
    <View
      key={id}
      className="w-full flex flex-row justify-between items-center bg-primaryColor mb-5 py-2 px-3 rounded-[12px]"
    >
      <View className="flex flex-row items-center">
        <Image
          source={require("../../assets/images/liftimage.png")}
          className="h-12 w-12 rounded-full"
        />
        <Text className="text-white font-medium text-[18px] ml-2 uppercase">
          {name}
        </Text>
      </View>
      <View>
        <PencilIcon color="white" size={25} />
      </View>
    </View>
  );
};

export default WorkoutTemplateCard;
