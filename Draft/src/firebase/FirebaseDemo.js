import React, { useState, useEffect } from 'react';
import firebaseUtil from './FirebaseUtil.js'
import { Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';

export default function Demo(props) {

    // I use state to keep the user data, so I pass the <set function> to the children
    // such line 44 and line 69
    const [image, setImage] = useState();
    const [jsonData, setJsonData] = useState({});

    // Ask for permission to access camera roll
    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Can not access camera roll.');
            }
          }
        })();
    }, []);

    // Get image in camera roll
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: false,
          aspect: [4, 3],
          quality: 1,
        });

        if (!result.cancelled) {
            uploadImage(result.uri);
        }
      };

    //  Upload image
    const uploadImage = async(uri) => {
        const fileName = uri.split('/').pop();
        const response = await fetch(uri);
        const blob = await response.blob();
        firebaseUtil.uploadImage(setImage.bind(this), fileName, blob);
    }

    // Alert the current URL
    const getImage = () => {
        if(image){
            alert('Current URL:' + image)
        }else{
            alert('Please upload image first')
        }
    }

    // Save data to firestore
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

    // Retrieve data from firestore
    const getJsonData = () => {
        const userID = 'Ken'
        firebaseUtil.getJsonData(setJsonData.bind(this), userID)
    }

    // clean the image
    const clearImage = () => {
        setImage()
    }
    // clean the jason
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
                <TouchableOpacity style={styles.button} onPress={() => pickImage()}>
                    <Text style={styles.buttonText} >Upload Image</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => getImage()}>
                    <Text style={styles.buttonText} >Get Image</Text>
                </TouchableOpacity>
            </View>

            {image &&(
                    <View>
                        <Image source={{uri: image}} style={{width: 200, height: 200}}/>
                        <TouchableOpacity style={styles.clearButton} onPress={() => clearImage()}>
                            <Text style={styles.buttonText} >Clear Image</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
            
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
                        <TouchableOpacity style={styles.clearButton} onPress={() => clearJsonData()}>
                            <Text style={styles.buttonText} >Clear Json</Text>
                        </TouchableOpacity>
                    </View>
            )}    
        </View>
    );
}


