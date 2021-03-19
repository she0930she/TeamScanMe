import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Navigator } from "react-native";
import ModalWhy from "./ModalWhy"


const ScoreScreen = ({ navigation }) => {
  const score = '80';

  return (

    <View style={styles.container}>
      <Text style={styles.headtextStyle}>Your Score is</Text>
      <Text style={styles.scoreStyle}>{score}</Text>
      <Text style={styles.bottomtextStyle}>out of 100</Text>
      <ModalWhy />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FAF4C8"
  },
  headtextStyle: {
    paddingTop: 130,
    fontSize: 20
  },
  bottomtextStyle: {
    padding: 10,
    fontSize: 20
  },
  scoreStyle: {
    paddingTop: 10,
    fontSize: 100,
    color: '#26FA02'
  },

});

export default ScoreScreen;