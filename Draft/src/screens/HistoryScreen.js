import React, { useState, useEffect, Component } from "react";
import { Text, Image, StyleSheet, View, FlatList, TouchableOpacity, SafeAreaView, SectionList, StatusBar } from "react-native";
import firebaseUtil from '../firebase/FirebaseUtil.js'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 50,
        width:300,
        marginTop:100
    },
    row_odd: {
        height:40,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        paddingLeft: 10,
        backgroundColor: "white",
        borderBottomWidth:1,
        borderBottomColor:"white"
    },
    row_even: {
        height:40,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        paddingLeft: 10,
        backgroundColor: "#47C1C1",
        borderBottomWidth:1,
        borderBottomColor:"white"
    },
    item_pic: {
        width:70,
        margin:0,
        padding:0
    },
    item_score: {
        width:80,
        margin:0,
        padding:0
    },
    item_star: {
        width:150,
        margin:0,
        padding:0
    },
    image_star: {
        width:20,
        height:20,
        resizeMode: 'contain'
    },
    image_camera: {
        width:30,
        height:30,
        resizeMode: 'contain'
    },
    header: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height:50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#fff",
        marginTop:10
    },
    header_text:{
        color:"#238BDB",
        fontSize: 25,
    },
    title_container:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:15
    },
    title: {
      fontSize: 24,
      color:"#5297DF"
    }
  });

const Item = ({ detail, index }) => (
    <View style={index%2 === 0? styles.row_odd: styles.row_even}>
      <Text style={styles.item_pic}>
          <Image style={styles.image_camera}
                 source={require('../images/camera.png')}
          />
      </Text>
      <Text style={styles.item_score}>{detail.score}</Text>
      <Text style={styles.item_star}>
            {
                detail.star.map(() => {
                        return(<Image keyExtractor={index} style={styles.image_star}
                            source={require('../images/star_filled.png')}
                        />);
                    }
                )
            }
        </Text>
    </View>
);

// When using SectionList, renderItem use specific key "data" as item. 
// So make sure the name in your object is named "data"
class HistoryView extends Component{

    constructor(props){
        super(props);
        this.state = {
            refreshing:false
        }
        const userID = 'history';
        firebaseUtil.getHistoryData(this.setState.bind(this), userID);
    }

    onRefresh(){
        this.setState({
            refreshing:true
        })
        const userID = 'history';
        firebaseUtil.getHistoryData(this.setState.bind(this), userID);
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.title_container}>
                    <Text style={styles.title}>
                        Your Scan Records
                    </Text>
                </View>
                {this.state.data &&(
                       <SectionList
                            jshowsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            sections={this.state.data}
                            keyExtractor={(item, index) => item + index}
                            renderItem={
                                ({ item, index}) => <Item detail={item} index={index}/>
                            }
                            renderSectionHeader={({ section: { date } }) => (
                                <View style={styles.header}>
                                    <Text style={styles.header_text}>{date}</Text>
                                </View>
                            )}
                            onRefresh={() => this.onRefresh()}
  	                        refreshing={this.state.refreshing}
                        />   
                    )
                }
                
            </SafeAreaView>
        ); 
    }
}

export default HistoryView;





