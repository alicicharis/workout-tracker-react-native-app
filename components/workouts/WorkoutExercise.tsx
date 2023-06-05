import { View, Text, FlatList, TextInput } from "react-native";
import React, { useContext, useEffect, useState, useRef } from "react";
import { MinusIcon, PlusIcon, CheckIcon } from "react-native-heroicons/solid";

import WorkoutSet from "./WorkoutSet";
import { MyContext } from "../../context/context";

interface WorkoutExerciseProps {
  id: number;
  name: string;
}

const WorkoutExercise = ({ id, name }: WorkoutExerciseProps) => {
  const { sets, addSetHandler } = useContext(MyContext);
  const [showSets, setShowSets] = useState<Boolean>(true);

  const [weight, setWeight] = useState<number>(0);
  const [reps, setReps] = useState<number>(0);
  const [weigtError, setWeightError] = useState<Boolean>(false);
  const [repsError, setRepsError] = useState<Boolean>(false);

  const inputWeightRef = useRef<TextInput>();
  const inputRepsRef = useRef<TextInput>();

  const hideShowSetsHandler = () => {
    setShowSets((prevState) => !prevState);
  };

  const addHandler = () => {
    if (weight === 0 || reps === 0 || isNaN(weight) || isNaN(reps)) {
      if (weight === 0 || isNaN(weight)) {
        setWeightError(true);
      }

      if (weight > 0) {
        setWeightError(false);
      }

      if (reps === 0 || isNaN(reps)) {
        setRepsError(true);
      }

      if (reps > 0) {
        setRepsError(false);
      }

      return;
    }

    setWeightError(false);
    setRepsError(false);

    const setData = {
      id: Math.random(),
      weight,
      reps,
      exerciseId: id,
    };

    inputWeightRef.current.clear();
    inputWeightRef.current.blur();
    inputRepsRef.current.clear();
    inputRepsRef.current.blur();

    addSetHandler(setData);
  };

  return (
    <View className="bg-white p-2 rounded-[12px] mb-4">
      <View className="flex flex-row justify-between items-center mr-1 mb-2">
        <Text className="text-primaryColor text-[18px] font-medium mb-2 ml-1">
          {name}
        </Text>
        {showSets ? (
          <MinusIcon
            onPress={hideShowSetsHandler}
            size={30}
            color="rgb(109, 99, 255)"
          />
        ) : (
          <PlusIcon
            onPress={hideShowSetsHandler}
            size={30}
            color="rgb(109, 99, 255)"
          />
        )}
      </View>
      <FlatList
        className={`${showSets ? "" : "hidden"}`}
        data={sets[id]}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item, index }) => (
          <WorkoutSet index={index} item={item} />
        )}
      />
      {showSets && (
        <View
          key={id}
          className="flex flex-row justify-around items-center w-full bg-primaryColor rounded-[12px] h-10 mb-2"
        >
          <Text className="text-white text-[16px] font-medium">
            {sets[id].length + 1}
          </Text>
          <View className="flex flex-row justify-center items-center">
            <TextInput
              ref={inputWeightRef}
              onChangeText={(e) => {
                setWeight(parseInt(e));
                setWeightError(false);
              }}
              cursorColor="rgb(109, 99, 255)"
              keyboardType="number-pad"
              className={`${
                weigtError ? "bg-red-400" : "bg-white"
              } w-7 text-center rounded-[10px] font-medium`}
            />
            <Text className="text-white text-[16px] font-medium ml-1">kg</Text>
          </View>

          <View className="flex flex-row justify-center items-center">
            <TextInput
              ref={inputRepsRef}
              onChangeText={(e) => {
                setReps(parseInt(e));
                setRepsError(false);
              }}
              cursorColor="rgb(109, 99, 255)"
              keyboardType="number-pad"
              className={`${
                repsError ? "bg-red-400" : "bg-white"
              } w-7 text-center rounded-[10px] font-medium`}
            />
            <Text className="text-white text-[16px] font-medium ml-1">
              reps
            </Text>
          </View>
          <PlusIcon color="white" size={30} onPress={addHandler} />
        </View>
      )}
    </View>
  );
};

export default WorkoutExercise;
