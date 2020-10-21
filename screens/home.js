import React, { useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "안녕하세요.", rating: 5, body: "안녕1", key: "1" },
    { title: "반갑습니다.", rating: 4, body: "갑반습2", key: "2" },
    { title: "안녕히가세요.", rating: 3, body: "후루루루3", key: "3" }
  ]);
  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
    //navigation.push("ReviewDetails");
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
