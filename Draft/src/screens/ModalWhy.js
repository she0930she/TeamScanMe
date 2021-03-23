import React, { useState, useEffect, Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

class ModalWhy extends Component{

    constructor(props){
        super(props);
        this.state = {
            modalVisible:false
        }
    }

    render(){
        return(
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        (!this.state.modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={{ width: "100%", height: "100%" }}>
                            <View style={styles.modalView}>
                                <Text style={styles.headerStyle}>DETAIL</Text>
                                <Text style={styles.modalText}>{this.props.reason}</Text>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => this.setState({modalVisible:!this.state.modalVisible})}
                                >
                                <Text style={styles.closeStyle}>X</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[styles.button, styles.buttonOpen, styles.whyStyle]}
                    onPress={() => this.setState({modalVisible:true})}
                >
                    <Text style={styles.textStyle}>Why</Text>
                </Pressable>
            </View>
            )
      }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        marginTop:517,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 25,
        padding: 10,
        // elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#2196F3",
    },
    buttonClose: {
        borderColor:"#CCC4C6",
        borderWidth:2,
        borderRadius: 50,
        width:40,
        height:40,
        padding: 0,
        paddingTop:6
    },
    textStyle: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
    },
    whyStyle: {
        fontSize: 20,
    },
    closeStyle: {
        fontSize: 20,
        textAlign: "center",
        color: "#CCC4C6"
    },
    headerStyle: {
        fontWeight:"bold",
        paddingBottom: 15,
        fontSize: 20,
    }
});

export default ModalWhy;