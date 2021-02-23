import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    MainContainer: {
        padding: 20,
        marginTop: 10,
    },
    infoContainer1: {
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    infoContainer2: {
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    infoContainer3: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    infoTitle: {
        fontSize: width * 0.041,
        fontWeight: '500',
        color: '#585858',
    },
    infoBody: {
        color: '#4888BF',
        marginTop: 10,
        textAlign: 'justify',
        fontSize: width * 0.035,
        fontWeight: '500'
    },
});