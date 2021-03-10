import React, { useState, useEffect } from 'react';
import { firebase } from './config';

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
          });
        }
      );
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
    }
}

export default firebaseUtil;