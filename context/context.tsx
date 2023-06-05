import React, { useState, ReactNode } from "react";

interface MyContextValue {
  exercises: any;
  sets: any;
  addSetHandler: any;
}

interface MyProviderProps {
  children: ReactNode;
}

export const MyContext = React.createContext<MyContextValue | undefined>(
  undefined
);

const DUMMY_DATA = [
  { id: 1, name: "Pull Up" },
  { id: 2, name: "Row" },
];

const DATA_SETS = {
  1: [{ id: 1, weight: 50, reps: 12 }],
  2: [{ id: 2, weight: 50, reps: 12 }],
};

const MyProvider = ({ children }: MyProviderProps) => {
  const [exercises, setExercises] = useState(DUMMY_DATA);
  const [sets, setSets] = useState(DATA_SETS);

  const addSetHandler = (set: any) => {
    setSets((prevState) => {
      const prevMap = prevState;
      const newSets = [...prevState[set.exerciseId], set];
      const newObj = { ...prevMap };
      newObj[set.exerciseId] = newSets;
      return newObj;
    });
  };

  const sharedData = {
    exercises,
    sets,
    addSetHandler,
  };

  return <MyContext.Provider value={sharedData}>{children}</MyContext.Provider>;
};

export default MyProvider;
