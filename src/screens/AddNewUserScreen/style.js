import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    bgImage: {
        width: width,
        height: height,
    },
    FormContainer: {
        padding: 10,
        marginTop: 20,
        marginBottom: 50
    },
    textBoxContainer: {
        backgroundColor: '#FFF',
        padding: 5,
        borderRadius: 5,
        marginBottom: 10,
    },
    inputBoxInner: {
        marginLeft: 5,
        color: '#141821'
    },
    submitBtnContainer: {
        position: 'absolute',
        bottom: -40,
        right: 10,
    },
});