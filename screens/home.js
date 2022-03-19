import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
  };
  const [reviews, setReviews] = useState([
    { title: "The legend of Zelda", rating: "5", body: "lorem ipsum", key: "1" },
    { title: "The three wise men", rating: "4", body: "lorem ipsum", key: "2" },
    { title: "The lost key of Guyana", rating: "3.5", body: "lorem ipsum", key: "3" }
  ]);
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", item)}>
            <Text styles={globalStyles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
