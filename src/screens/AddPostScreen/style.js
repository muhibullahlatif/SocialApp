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
    },
    textTitleContainer: {
        backgroundColor: '#FFF',
        padding: 5,
        borderRadius: 5,
    },
    inputTitleInner: {
        marginLeft: 5,
        color: '#141821'
    },
    textBodyContainer: {
        marginTop: 20,
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#FFF',
    },
    inputBodyInner: {
        marginLeft: 5,
        color: '#141821',
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E8ED'
    },
    textBodyFooter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 15
    },
    extrasContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cameraIcon: {
        marginLeft: 20,
    },
    saveBtnContainer: {
        backgroundColor: '#518EC2',
        padding: 10,
        borderRadius: 50
    },
});