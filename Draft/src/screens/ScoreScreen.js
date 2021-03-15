import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Navigator } from "react-native";
import ModalWhy from "./ModalWhy"


const ScoreScreen = ({ navigation }) => {
  const score = '50';

  return (

    <View style={styles.container}>
      <Text style={styles.textStyle}>Your Score is</Text>
      <Text style={styles.scoreStyle}>{score}</Text>
      <Text style={styles.textStyle}>out of 100</Text>
      <ModalWhy />
      {/* <TouchableOpacity>
        <Text style={styles.buttonStyle}>Why?</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FAF4C8"
  },
  textStyle: {
    fontSize: 20
  },
  scoreStyle: {
    fontSize: 100,
    color: '#F53845'
  },
  buttonStyle: {
    fontSize: 30,
    color: '#352AFA'
  }


});

export default ScoreScreen;