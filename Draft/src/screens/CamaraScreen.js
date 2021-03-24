import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, Dimensions, View, TouchableOpacity, Alert, SafeAreaView} from 'react-native';
import { Camera } from "expo-camera";
import firebaseUtil from '../firebase/FirebaseUtil.js';

const WINDOW_HEIGHT = Dimensions.get("window").height;
const captureSize = Math.floor(WINDOW_HEIGHT * 0.09);

export default function CamaraScreen(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = useState();
  const [isCameraReady, setIsCameraReady] = useState(false);  
  const cameraRef = useRef();

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    }, []);
  
    const onCameraReady = () => {
      setIsCameraReady(true);
    };

    const takePicture = async () => {
      if (cameraRef.current) {
        const options = { quality: 0.5, base64: true, skipProcessing: true };
        const data = await cameraRef.current.takePictureAsync(options);
        const source = data.uri;
        if (!source.cancelled) {
          uploadImage(source)
          setTimeout(() => {
            redirectScore(); 
            }, 5500); 
        }
      }
    };

    const redirectScore = () => {
      <View style={styles.control}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={Alert.alert(
            "Image Processed",
            "Scan results are ready to view!",
            [
              { 
                text: "View Results", 
                onPress: () => {props.navigation.navigate('Score',{history:""})}
              },
              {
                text: "Cancel",
                onPress: () => takePicture,
                style: "cancel"
              },
            ],
            { cancelable: true }
          )}
          style={styles.capture}
        />
      </View>
    };

    const renderCaptureControl = () => (
      <View style={styles.control}>
        <TouchableOpacity
          activeOpacity={0.7}
          disabled={!isCameraReady}
          onPress={takePicture}
          style={styles.capture}
        />
      </View>
    );

    const uploadImage = async(uri) => {
        const fileName = uri.split('/').pop();
        const response = await fetch(uri);
        const blob = await response.blob();
        firebaseUtil.uploadImage(setImage.bind(this), fileName, blob);
    }

    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text style={styles.text}>No access to camera</Text>;
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <Camera
          ref={cameraRef}
          style={styles.container}
          type={cameraType}
          flashMode={Camera.Constants.FlashMode.off}
          onCameraReady={onCameraReady}
          onMountError={(error) => {
            console.log("Camera error", error);
          }}
        />
        <View style={styles.container}>
        {renderCaptureControl()}
        </View>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
    },
    media: {
      ...StyleSheet.absoluteFillObject,
    },
    control: {
      position: "absolute",
      flexDirection: "row",
      bottom: 38,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    capture: {
      backgroundColor: "#f5f6f5",
      borderRadius: 5,
      height: captureSize,
      width: captureSize,
      borderRadius: Math.floor(captureSize / 2),
      marginHorizontal: 31,
    },
    recordIndicatorContainer: {
      flexDirection: "row",
      position: "absolute",
      top: 25,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent",
      opacity: 0.7,
    },
    recordTitle: {
      fontSize: 14,
      color: "#ffffff",
      textAlign: "center",
    },
    text: {
      color: "#fff",
    }, 
    button: {
      borderRadius: 20,
      padding: 10,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    textStyle: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    closeStyle: {
      fontSize: 20,
      textAlign: "center",
      color: "white"
  }
  });