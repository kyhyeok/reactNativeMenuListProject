import React from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <Text>reviewDetail Screen</Text>
      <Button title="back to home screen" onPress={pressHandler} />
    </View>
  );
}
