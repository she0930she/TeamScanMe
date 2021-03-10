import React, { useState, useEffect } from 'react';
import { firebase } from './config';

// run yarn add firebase (if you are not using yarn, try npm)
// if you encounter the problem "Tried to register two views in the same name RNCSafeAreaProvider"
// run expo install react-native-safe-area-context
// run yarn or npm install

// Create a storage reference from the storage service
const storageRef = firebase.storage().ref();

// Create a firestore reference from the firestore service
const jsonRef = firebase.firestore().collection('json')

const firebaseUtil = {

    uploadImage: () => {
      const spaceRef = storageRef.child('images/space.jpg');
      spaceRef.put(file).then((snapshot) => {
        alert('Uploaded an image file!');
      });
    },

    getImage: () => {
      return 0;
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
          console.log("Error getting document:", error);
        });
    }
}

export default firebaseUtil;