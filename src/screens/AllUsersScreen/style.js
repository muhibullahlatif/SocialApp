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
        shadowColor: "#E06394",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
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
        color: '#E06394'
    },
    subText: {
        color: '#7180F5'
    },
});