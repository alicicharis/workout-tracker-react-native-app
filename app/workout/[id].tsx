import React from "react";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import WorkoutExercises from "../../components/workouts/WorkoutExercises";
import WorkoutExercise from "../../components/workouts/WorkoutExercise";

const WorkoutScreen = () => {
  const router = useRouter();
  const { id } = useSearchParams();

  // console.log("search: ", searchParams);
  return (
    <SafeAreaView className="px-5">
      <Stack.Screen
        options={{
          headerTitle: `PULL`,
          headerTintColor: "white",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "rgb(109, 99, 255)" },
          contentStyle: {
            backgroundColor: "rgb(109, 99, 255)",
          },
        }}
      />
      <WorkoutExercises />
    </SafeAreaView>
  );
};

export default WorkoutScreen;
