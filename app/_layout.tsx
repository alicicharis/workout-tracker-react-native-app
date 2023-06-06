import React from "react";
import { Tabs } from "expo-router";

import { HomeIcon, WalletIcon } from "react-native-heroicons/solid";
import MyProvider from "../context/context";

const Layout = () => {
  return (
    <MyProvider>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ focused }) => (
              <HomeIcon
                color={focused ? "rgb(109, 99, 255)" : "black"}
                size={30}
              />
            ),
          }}
        />
        <Tabs.Screen name="index" options={{ href: null }} />
        <Tabs.Screen name="workout" options={{ href: null }} />
        <Tabs.Screen
          name="workout-template"
          options={{
            tabBarIcon: ({ focused }) => (
              <WalletIcon
                color={focused ? "rgb(109, 99, 255)" : "black"}
                size={30}
              />
            ),
          }}
        />
      </Tabs>
    </MyProvider>
  );
};

export default Layout;
