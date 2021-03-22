import React, { useState, useEffect, Component } from "react";
import { Text, Image, StyleSheet, View, TouchableOpacity, Navigator } from "react-native";
import ModalWhy from "./ModalWhy"
import firebaseUtil from '../firebase/FirebaseUtil.js'

class ScoreScreen extends Component{

  constructor(props){
    super(props);
    this.state = {

    }
    const userID = 'history';
    firebaseUtil.getHistoryData(this.setState.bind(this), userID);
  }

  getImageUrl = () => {
    let data = this.state.data; 
    return(
      <Image style={styles.image} source={{uri: data[0].data[0].image_url}}/>
    );
  }

  getScore = () => {
    let data = this.state.data; 
    return data[0].data[0].score;
  }

  getReason = () => {
    let data = this.state.data; 
    return data[0].data[0].reason;
  }

  render(){
    return(
      <View style={styles.container}>
        {this.state.data &&(
          <View>
            {this.getImageUrl()}
            <Text style={styles.headtextStyle}>Score</Text>
            <Text style={styles.scoreStyle}>{this.getScore()}</Text>
            <ModalWhy reason={this.getReason()}/>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 70,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FAF4C8"
  },
  headtextStyle: {
    paddingTop: 10,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 50,
    color: '#3D6061'
  },
  scoreStyle: {
    textAlign: "center",
    fontSize: 120,
    color: '#00BF20'
  },
  image: {
    width: 280,
    height: 280
  },

});

export default ScoreScreen;
