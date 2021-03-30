import React, { useState, useEffect, Component } from "react";
import { Text, Image, StyleSheet, View, TouchableOpacity, Navigator } from "react-native";
import ModalWhy from "./ModalWhy"
import firebaseUtil from '../firebase/FirebaseUtil.js'
import { useIsFocused } from '@react-navigation/native';


class ScoreScreen extends Component{

  constructor(props){
    super(props);
    this.state = {
    }
    const userID = 'history';
    firebaseUtil.getHistoryData(this.setState.bind(this), userID);
  }

  componentDidMount() {
    this.props.navigation.addListener(
      'focus',
      payload => {  
        firebaseUtil.getHistoryData(this.setState.bind(this), 'history');
      }
    );
  }

  getImageUrl = () => {
    let data = this.state.data; 
    let length = data[0].data.length-1;
    return(
      <View style={styles.view_blurry}>
        <Image style={styles.image} source={{uri: data[0].data[length].image_url}}/>
      </View>
    );
  }

  getScore = () => {
    let data = this.state.data; 
    let length = data[0].data.length-1;
    return data[0].data[length].score;
  }

  getReason = () => {
    let data = this.state.data; 
    let length = data[0].data.length-1;
    return data[0].data[length].reason;
  }

  getScoreView = () => {
    if(this.props.route.params && this.props.route.params.history !== ""){
      return(
        <View style={styles.center}>
          <View style={styles.view_blurry}>
            <Image style={styles.image} source={{uri: this.props.route.params.history.image_url}}/>
          </View>
          <View style={styles.scoreView}>
            <Text style={styles.scoreStyle}>{this.props.route.params.history.score}</Text>
          </View>
          <ModalWhy reason={this.props.route.params.history.reason}/>
        </View>
      )
    }else{
      return(
        <View style={styles.center}>
            {this.getImageUrl()}
            <View style={styles.scoreView}>
              <Text style={styles.scoreStyle}>{this.getScore()}</Text>
            </View>
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

export default ScoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headtextStyle: {
    paddingTop: 3,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 50,
    color: '#3D6061'
  },
  scoreView: {
    justifyContent:"center",
    width:170,
    height:170,
    borderWidth:5,
    borderTopColor:"orange",
    borderLeftColor:"orange",
    borderRightColor:"orange",
    borderBottomColor:"#F2EBB8",
    borderRadius:100,
    marginTop:30
  },
  scoreStyle: {
    textAlign: "center",
    fontSize: 100,
    fontWeight:"bold",
    color: '#00BF20'
  },
  image: {
    width: 300,
    height: 300,
  },
  header: {
    fontWeight: "bold",
    color: "tomato",
    fontSize: 50,
    paddingBottom: 10,
  },
  view_blurry: {
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
  }
});