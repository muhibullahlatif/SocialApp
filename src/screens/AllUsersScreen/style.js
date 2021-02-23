import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    mainContainer: {
        padding: 12
    },
    userContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        shadowColor: "#4888BF",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    userImgText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    TextContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginLeft: 10
    },
    userNameText: {
        color: '#141821'
    },
    subText: {
        color: '#858997'
    },
});