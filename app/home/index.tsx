import { View, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

import Header from "../../components/Header";
import Workouts from "../../components/workouts/Workouts";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Header />
      <Workouts />
    </SafeAreaView>
  );
};

export default Home;
