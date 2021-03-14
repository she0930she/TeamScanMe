import React, { useState, useEffect, Component } from "react";
import { Text, StyleSheet, View, FlatList, TouchableOpacity, SafeAreaView, SectionList, StatusBar } from "react-native";
import firebaseUtil from '../firebase/FirebaseUtil.js'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 50,
    },
    row: {
        height:40,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        paddingLeft: 10,
        backgroundColor: "#47C1C1",
        borderBottomWidth:1,
        borderBottomColor:"white"
    },
    item: {
     
    },
    header: {
        borderRadius: 10,
        height:50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#fff",
        marginTop:10
    },
    header_text:{
        color:"#d8eb34",
        fontSize: 25,
    },
    title: {
      fontSize: 24
    }
  });

const DATA = [
    {
        date:"Mar 03, 2021",
        data: [
            {
                image_url: "ken",
                score: 100.0,
                star: 4,
                reason: "Reason"
            },
            {
                image_url: "Amanda",
                score: 80.5,
                star: 3,
                reason: "Reason2"
            },
            {
                image_url: "Lakshya",
                score: 60.3,
                star: 2,
                reason: "Reason3"
            },
            {
                image_url: "Brian",
                score: 59.9,
                star: 1,
                reason: "Reason4"
            }
        ]
    },
    {
        date:"Mar-04-2021",
        data: [
            {
                image_url: "ken",
                score: 100.0,
                star: 4,
                reason: "Reason"
            },
            {
                image_url: "Amanda",
                score: 80.5,
                star: 3,
                reason: "Reason2"
            },
            {
                image_url: "Lakshya",
                score: 60.3,
                star: 2,
                reason: "Reason3"
            },
            {
                image_url: "Brian",
                score: 59.9,
                star: 1,
                reason: "Reason4"
            }
        ]
    },
    {
        date:"Mar-05-2021",
        data: [
            {
                image_url: "ken",
                score: 100.0,
                star: 4,
                reason: "Reason"
            },
            {
                image_url: "Amanda",
                score: 80.5,
                star: 3,
                reason: "Reason2"
            },
            {
                image_url: "Lakshya",
                score: 60.3,
                star: 2,
                reason: "Reason3"
            },
            {
                image_url: "Brian",
                score: 59.9,
                star: 1,
                reason: "Reason4"
            }
        ]
    },
    {
        date:"Mar-06-2021",
        data: [
            {
                image_url: "ken",
                score: 100.0,
                star: 4,
                reason: "Reason"
            },
            {
                image_url: "Amanda",
                score: 80.5,
                star: 3,
                reason: "Reason2"
            },
            {
                image_url: "Lakshya",
                score: 60.3,
                star: 2,
                reason: "Reason3"
            }
        ]
    }
];

const Item = ({ detail, index }) => (
    <View style={styles.row}>
      <Text style={styles.title}>{detail.image_url}</Text>
      <Text style={styles.title}>{detail.score}</Text>
      <Text style={styles.title}>{detail.star}</Text>
    </View>
);

// When using SectionList, renderItem use specific key "data" as item. 
// So make sure the name in your object is named "data"
function HistoryView(props){

    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={
                    ({ item, index}) => <Item detail={item} index={index}/>
                }
                renderSectionHeader={({ section: { date } }) => (
                    <View style={styles.header}>
                        <Text style={styles.header_text}>{date}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );    
    
}

export default HistoryView;





