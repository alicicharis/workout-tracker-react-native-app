import { View, Text, Dimensions, FlatList } from "react-native";
import React from "react";
import WorkoutCard from "./WorkoutCard";
import Carousel from "react-native-snap-carousel";

const DUMMY_DATA = [
  { id: 1, name: "PUSH" },
  { id: 2, name: "PULL" },
  { id: 3, name: "LEGS" },
];

const { width, height } = Dimensions.get("window");

const Workouts = () => {
  return (
    <View className="flex mt-8 items-center ml-5">
      <Text className="font-medium text-[24px] mb-5 mr-5">Start workout</Text>
      {/* <WorkoutCard /> */}
      {/* <Carousel
        containerCustomStyle={{ overflow: "visible" }}
        data={DUMMY_DATA}
        renderItem={({ item }) => <WorkoutCard id={item.id} name={item.name} />}
        firstItem={1}
        loop={true}
        sliderWidth={width}
        itemWidth={width * 0.43}
        inactiveSlideScale={0.75}
        inactiveSlideOpacity={0.75}
        slideStyle={{ display: "flex", alignItems: "center" }}
      /> */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DUMMY_DATA}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => <WorkoutCard id={item.id} name={item.name} />}
      />
    </View>
  );
};

export default Workouts;
