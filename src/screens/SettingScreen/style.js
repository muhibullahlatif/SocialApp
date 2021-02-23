import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    MainContainer: {
        padding: 20,
        marginTop: 50,
    },
    optContainer1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    optContainer2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
    },
    optText1: {
        marginLeft: 10,
        color: '#4888BF',
        fontSize: width * 0.038,
        fontWeight: '500',
    },
    optText2: {
        marginLeft: 10,
        color: '#FF7E7E',
        fontSize: width * 0.038,
        fontWeight: '500'
    },
});