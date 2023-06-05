import React from "react";
import { Stack } from "expo-router";

import MyProvider from "../context/context";

const Layout = () => {
  return (
    <MyProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </MyProvider>
  );
};

export default Layout;
