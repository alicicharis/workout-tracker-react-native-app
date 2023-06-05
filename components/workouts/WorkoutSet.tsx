import { View, Text } from "react-native";
import { CheckIcon } from "react-native-heroicons/solid";

interface WorkoutSetProps {
  index: number;
  item: SetProps;
}

interface SetProps {
  id: number;
  reps: number;
  weight: number;
}

const WorkoutSet = ({ index, item }: WorkoutSetProps) => {
  return (
    <View
      key={item.id}
      className="flex flex-row justify-around items-center w-full bg-primaryColor rounded-[12px] h-10 mb-2"
    >
      <Text className="text-white text-[16px] font-medium">{index + 1}</Text>
      <View className="flex flex-row justify-center items-center">
        <Text className="text-white text-[16px] font-medium ml-1">
          {item.weight} kg
        </Text>
      </View>
      <Text className="text-white text-[16px] font-medium ml-1">
        {item.reps} reps
      </Text>
      <CheckIcon color="white" size={30} />
    </View>
  );
};

export default WorkoutSet;
