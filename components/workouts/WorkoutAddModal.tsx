import { View, Text, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { XMarkIcon, MinusCircleIcon } from "react-native-heroicons/solid";
import { FlatList } from "react-native-gesture-handler";
import WorkoutAddModalExercise from "./WorkoutAddModalExercise";

interface WorkoutAddModalProps {
  showModal: boolean;
  setShowModal: any;
}
const DUMMY_DATA = [
  { id: 1, name: "push" },
  { id: 2, name: "legs" },
];
const WorkoutAddModal = ({ showModal, setShowModal }: WorkoutAddModalProps) => {
  return (
    <Modal
      visible={showModal}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setShowModal((prevState: boolean) => !prevState)}
    >
      <View className="flex flex-1 bg-overlayColor py-20 px-8 rounded-[12px]">
        <View className="bg-primaryColor flex-1 rounded-[12px] p-2">
          <View className="flex flex-row justify-between px-2 pt-2 mb-7 items-center">
            <Text className="text-white font-medium text-[20px]">
              Add workout
            </Text>
            <TouchableOpacity
              onPress={() => setShowModal((prevState: boolean) => !prevState)}
            >
              <XMarkIcon color="white" size={30} />
            </TouchableOpacity>
          </View>
          <View className="w-full rounded-[12px] bg-white p-2">
            <Text className="text-primaryColor font-medium text-[18px]">
              Workout Name
            </Text>
            <FlatList
              data={DUMMY_DATA}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <WorkoutAddModalExercise />}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default WorkoutAddModal;
