import { View, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

import Header from "../../components/Header";

const Home = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />
    </SafeAreaView>
  );
};

export default Home;
