import React, { useState, useEffect, Component } from "react";
import { Text, Image, StyleSheet, View, FlatList, TouchableOpacity, SafeAreaView, SectionList, StatusBar } from "react-native";
import firebaseUtil from '../firebase/FirebaseUtil.js'
import styles from "../css/styles.js"



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

    getItem(detail, index){
        return(
            <View>
                <TouchableOpacity style={index%2 === 0? styles.row_odd: styles.row_even}
                        onPress={({index})=>{
                            this.props.navigation.navigate('Score', {history: detail})
                        }}>
                    <Text style={styles.item_pic}>
                            <Image style={styles.image_camera}
                            source={{uri: detail.image_url}}
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
                </TouchableOpacity>
            </View>
        )
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <TouchableOpacity onPress={()=>{
                            this.props.navigation.navigate('Score', { history: 'COol' })
                        }}>
                        <Text>CLICK</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.title_container}>
                    <Text style={styles.title}>
                        Your Scan Records
                    </Text>
                </View>
                {this.state.data &&(
                       <SectionList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            sections={this.state.data}
                            keyExtractor={(item, index) => item + index}
                            renderItem={
                                ({ item, index}) => this.getItem(item, index)
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





