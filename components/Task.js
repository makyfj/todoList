import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = ({task}) => {
  return (
    <View>
      <Text>{task}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
})

export default Task;
