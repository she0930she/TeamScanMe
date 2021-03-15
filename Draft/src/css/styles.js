import { StyleSheet, StatusBar } from "react-native";

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

  export default styles