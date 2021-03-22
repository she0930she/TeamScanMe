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

  getScoreView = () => {
    if(this.props.route.params){
      return(
        <View>
          <Image style={styles.image} source={{uri: this.props.route.params.history.image_url}}/>
          <Text style={styles.headtextStyle}>Your Score is</Text>
          <Text style={styles.scoreStyle}>{this.props.route.params.history.score}</Text>
          <Text style={styles.bottomtextStyle}>out of 100</Text>
          <ModalWhy reason={this.props.route.params.history.reason}/>
        </View>
      )
    }else{
      return(
        <View>
            {this.getImageUrl()}
            <Text style={styles.headtextStyle}>Your Score is</Text>
            <Text style={styles.scoreStyle}>{this.getScore()}</Text>
            <Text style={styles.bottomtextStyle}>out of 100</Text>
            <ModalWhy reason={this.getReason()}/>
        </View>
      )
    }
  }

  render(){
    return(
      <View style={styles.container}>
        {this.state.data &&(
          this.getScoreView()
        )}
      </View>
    )
  }
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
  image: {
    width: 200,
    height: 200
  },

});

export default ScoreScreen;