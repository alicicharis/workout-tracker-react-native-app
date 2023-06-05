import { View, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import WorkoutExercise from "./WorkoutExercise";

import { MyContext } from "../../context/context";

const WorkoutExercises = () => {
  const { exercises } = useContext(MyContext);

  return (
    <FlatList
      data={exercises}
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => (
        <WorkoutExercise id={item.id} name={item.name} />
      )}
    />
  );
};

export default WorkoutExercises;
