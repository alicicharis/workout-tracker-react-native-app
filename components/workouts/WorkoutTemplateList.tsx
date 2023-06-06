import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";

import WorkoutTemplateCard from "./WorkoutTemplateCard";

const DUMMY_DATA = [
  { id: 1, name: "PUSH" },
  { id: 2, name: "PULL" },
];

const WorkoutTemplateList = () => {
  return (
    <View className="mt-10">
      <FlatList
        data={DUMMY_DATA}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <WorkoutTemplateCard id={item.id} name={item.name} />
        )}
      />
    </View>
  );
};

export default WorkoutTemplateList;
