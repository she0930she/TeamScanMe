import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width: 120,
        alignItems: "center",
        justifyContent: 'center',
        margin:5
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    formContainer: {
        flexDirection: 'row',
        height: 80,
        marginTop: 60,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listText: {
        fontSize: 16,
        paddingLeft: 5
    },
    clearButton: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#788eec',
        alignSelf: 'stretch',
        alignItems: "center",
        justifyContent: 'center',
        margin:5
    },
})