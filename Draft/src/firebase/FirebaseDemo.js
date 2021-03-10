import React, { useState, useEffect } from 'react';
import firebaseUtil from './FirebaseUtil.js'
import { Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
export default function Demo(props) {

    const [image, setImage] = useState(0);
    const [jsonData, setJsonData] = useState({});

    const uploadImage = () => {
        firebaseUtil.uploadImage();
        // const userID = 'Ken';
        // const jsonData = {
        //     name: "Ken Lu", 
        //     gender: "Male", 
        //     country: "TWN",
        //     hasCar: false, 
        //     height: 180,
        //     interests: ["hiking", "traveling"]
        // };
        // firebaseUtil.saveJsonData(userID, jsonData);
    }

    const getImage = () => {
        // const userID = 'Ken'
        // firebaseUtil.getJsonData(setJsonData.bind(this), userID)
    }

    const saveJsonData = () => {
        const userID = 'Ken';
        const jsonData = {
            name: "Ken Lu", 
            gender: "Male", 
            country: "TWN",
            hasCar: false, 
            height: 180,
            interests: ["hiking", "traveling"]
        };
        firebaseUtil.saveJsonData(userID, jsonData);
    }

    const getJsonData = () => {
        const userID = 'Ken'
        firebaseUtil.getJsonData(setJsonData.bind(this), userID)
    }

    // clean the view
    const clearJsonData = () => {
        setJsonData({})
    }

    const hasCar = () => {
        if(jsonData.hasCar){
            return "TRUE"
        }else{
            return "FALSE"
        }
    }

    const getInterests = () => {
        return jsonData.interests ? jsonData.interests[0]+", "+jsonData.interests[1] : ""
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
            <TouchableOpacity style={styles.button} onPress={() => uploadImage()}>
                    <Text style={styles.buttonText} >Upload Image</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => getImage()}>
                    <Text style={styles.buttonText} >Get Image</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.formContainer}>
                <TouchableOpacity style={styles.button} onPress={() => saveJsonData()}>
                    <Text style={styles.buttonText} >Save JsonData</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => getJsonData()}>
                    <Text style={styles.buttonText} >Get JsonData</Text>
                </TouchableOpacity>
            </View>
                {jsonData.name && (
                    <View>
                        <Text style={styles.listText}>Name:{jsonData.name}</Text>
                        <Text style={styles.listText}>Gender:{jsonData.gender}</Text>
                        <Text style={styles.listText}>Country:{jsonData.country}</Text>
                        <Text style={styles.listText}>HasCar:{hasCar()}</Text>
                        <Text style={styles.listText}>Height:{jsonData.height}</Text>
                        <Text style={styles.listText}>Interests:{getInterests()}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => clearJsonData()}>
                            <Text style={styles.buttonText} >Clear</Text>
                        </TouchableOpacity>
                    </View>
                )}
        </View>
    );
}


