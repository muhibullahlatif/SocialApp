import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    MainContainer: {
        backgroundColor: 'transparent',
        width: width,
        shadowColor: "#4888BF",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        paddingBottom: 15
    },
    postContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    postDetailContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '75%',
        marginTop: 5
    },
    detailInner1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '80%'
    },
    icon2: {
        marginLeft: 15,
    },
    commentText: {
        marginLeft: 10,
        color: '#4888BF'
    },
    postTextContainer: {
        width: '90%',
        textAlign: 'center',
    },
    postTitle: {
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 'bold',
        color: '#4888BF'
    },
    postBody: {
        textAlign: 'center',
    },
});