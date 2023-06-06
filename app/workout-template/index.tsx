import { View, Text, Modal, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { PlusIcon } from "react-native-heroicons/solid";

import WorkoutTemplateList from "../../components/workouts/WorkoutTemplateList";
import { TouchableOpacity } from "react-native-gesture-handler";
import WorkoutAddModal from "../../components/workouts/WorkoutAddModal";

const WorkoutTemplate = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <SafeAreaView className="px-5">
      <WorkoutAddModal showModal={showModal} setShowModal={setShowModal} />
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex justify-between items-center flex-row mt-10">
        <Text className="font-medium text-[18px]">Workout Templates</Text>
        <TouchableOpacity
          onPress={() => setShowModal((prevState) => !prevState)}
        >
          <PlusIcon color="rgb(109, 99, 255)" size={30} />
        </TouchableOpacity>
      </View>
      <WorkoutTemplateList />
    </SafeAreaView>
  );
};

export default WorkoutTemplate;
