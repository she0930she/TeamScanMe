import React, { useState, useEffect, Component } from "react";
import { Text, Image, StyleSheet, View, TouchableOpacity, Navigator } from "react-native";
import ModalWhy from "./ModalWhy"
import firebaseUtil from '../firebase/FirebaseUtil.js'
import { useIsFocused } from '@react-navigation/native';

class ScoreScreen extends Component{

  constructor(props){
    super(props);
    this.state = {
      // data:this.props.data.data
    }
    const userID = 'history';
    firebaseUtil.getHistoryData(this.setState.bind(this), userID);
    this.props.navigation.addListener(
      'didFocus',
      payload => {
        alert('didBlur');
      }
    );
  }

  componentDidMount() {
    this.props.navigation.addListener(
      'focus',
      payload => {    
        firebaseUtil.getHistoryData(this.setState.bind(this), 'history');
      }
    );
  }

  // componentWillUnmount() {
  //   this._unsubscribe();
  // }

  getImageUrl = () => {
    let data = this.state.data; 
    let length = data[0].data.length-1;
    return(
      <Image style={styles.image} source={{uri: data[0].data[length].image_url}}/>
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
    if(this.props.route.params){
      return(
        <View>
          <Image style={styles.image} source={{uri: this.props.route.params.history.image_url}}/>
          <Text style={styles.headtextStyle}>Score</Text>
          <Text style={styles.scoreStyle}>{this.props.route.params.history.score}</Text>
          <ModalWhy reason={this.props.route.params.history.reason}/>
        </View>
      )
    }else{
      return(
        <View>
            {this.getImageUrl()}
            <Text style={styles.headtextStyle}>Score</Text>
            <Text style={styles.scoreStyle}>{this.getScore()}</Text>
            <ModalWhy reason={this.getReason()}/>
        </View>
      )
    }
  }

  render(){
    const { isFocused } = this.props;
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

// function(props) {
//   const isFocused = useIsFocused();
//   const [data, setData] = useState({});
//   React.useEffect(() => {
//     const unsubscribe = props.navigation.addListener('focus', () => {
//       firebaseUtil.getHistoryData(setData.bind(this), "history");
//       alert(JSON.stringify(data))
//     });
//     return unsubscribe;
//   }, [props.navigation]);
//   return <ScoreScreen {...props} data={data} isFocused={isFocused} />;
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 70,
    paddingLeft: 20,
    paddingRight: 20,
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
  scoreStyle: {
    textAlign: "center",
    fontSize: 120,
    fontWeight:"bold",
    color: '#00BF20'
  },
  image: {
    width: 280,
    height: 280
  },
  header: {
    fontWeight: "bold",
    color: "tomato",
    fontSize: 50,
    paddingBottom: 10,
  }

});