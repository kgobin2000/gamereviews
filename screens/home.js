import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
  };
  const [reviews, setReviews] = useState([
    { title: "The legend of Zelda", rating: "5", body: "lorem ipsum", key: "1" },
    { title: "The three wise men", rating: "4", body: "lorem ipsum", key: "2" },
    { title: "The lost key of Guyana", rating: "3", body: "lorem ipsum", key: "3" }
  ]);

  const addReview = review => {
    review.key = Math.random().toString();
    setReviews(currentReviews => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons name="close" size={24} onPress={() => setModalOpen(false)} style={{ ...styles.modalToggle, ...styles.modalClose }} />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons name="add" size={24} onPress={() => setModalOpen(true)} style={styles.modalToggle} />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", item)}>
            <Card>
              <Text styles={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    marginTop: 40
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    borderRadius: 10,
    alignSelf: "center"
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  }
});
