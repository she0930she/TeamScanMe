import React, { useState, useEffect } from 'react';
import { firebase } from './config';
import {Alert} from "react-native";

// run yarn add firebase (if you are not using yarn, try npm)
// if you encounter the problem "Tried to register two views in the same name RNCSafeAreaProvider"
// run expo install react-native-safe-area-context
// run yarn or npm install

// Create a storage reference from the storage service
const storageRef = firebase.storage().ref();

// Create a firestore reference from the firestore service
const jsonRef = firebase.firestore().collection('json');

const firebaseUtil = {

    uploadImage: (setImage, fileName, blob) => {
      const imageRef = storageRef.child(fileName);
      const uploadTask = imageRef.put(blob);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
        },
        (error) => {
          // error
        },
        () => {
          // success
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            setImage(downloadURL);
            firebaseUtil.uploadJsonData(downloadURL);
          });
        }
      );
    },

    uploadJsonData: (downloadURL) => {
      jsonRef
        .doc("history")
        .get()
        .then((doc) => {
          if (doc.exists) {
            let data = doc.data().data;

            //Create new product
            let score =  Math.floor(Math.random() * (100 - 60 + 1) ) + 60;
            let star = [];
            if(score <= 100 && score > 90){
              star = ["star","star","star","star"];
            }else if(score <= 90 && score > 80){
              star = ["star","star","star"];
            }else if(score <= 80 && score > 70){
              star = ["star","star"];
            }else{
              star = ["star"];
            }
            let newProduct = {
              image_url:downloadURL,
              reason:"Monosodium Glutamate: a flavor enhancer, has a reputation causing insatiable hunger. increase appetite. Cause us to eat too many calories in the form of junk food.",
              score: score,
              star:star
            };

            // Create new date
            let newDate = new Date();
            let dd = newDate.getDate();
            let mm = newDate.getMonth()+1; 
            let yyyy = newDate.getFullYear();
            if(dd<10) 
            {
                dd='0'+dd;
            } 
            if(mm<10) 
            {
                mm='0'+mm;
            } 
            let dateString = mm + "-" + dd + ", " + yyyy;

            // Check date
            if(data[data.length-1].date === dateString){
              data[data.length-1].data.push(newProduct);
            }else{
              data.push({
                date:dateString,
                data:[newProduct]
              });
            }

            // Update history
            jsonRef
              .doc("history")
              .set({data:data})
              .then(() => {
                Alert.alert('Score Calculated!');
              });

          } else {
            alert("No such document!");
          }
        }).catch((error) => {
          alert("Error getting document:", error);
        });
    },

    saveJsonData: (id, jsondata) => {
      jsonRef
        .doc(id)
        .set(jsondata)
        .then(() => {
          alert('Success!');
        });
    },

    getJsonData: (setJsonData, id) => {
      jsonRef
        .doc(id)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setJsonData(doc.data())
          } else {
            alert("No such document!");
          }
        }).catch((error) => {
          alert("Error getting document:", error);
        });
    },

    getHistoryData: (setJsonData, id) => {
      jsonRef
        .doc(id)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setJsonData({
              data: doc.data().data.reverse(),
              refreshing:false
            })          
          } else {
            alert("No such document!");
          }
        }).catch((error) => {
          alert("Error getting document:", error);
        });
    }
}

export default firebaseUtil;