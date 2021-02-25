import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    MainContainer: {
        backgroundColor: 'transparent',
        width: width,
        paddingBottom: 15
    },
    postContainer: {
        backgroundColor: '#FFF',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        shadowColor: "#4888BF",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    userContainer: {
        width: width,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
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
    postImage: {
        width: '100%',
        marginTop: 10
    },
    postDetailContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5,
    },
    detailInner1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '90%'
    },
    icon2: {
        marginLeft: 15,
    },
    commentText: {
        marginLeft: 10,
        color: '#BCC5D3'
    },
    postTextContainer: {
        width: '95%',
        textAlign: 'center',
    },
    postTitle: {
        textAlign: 'left',
        marginTop: 5,
        fontSize: width * 0.038,
        fontWeight: 'bold',
        color: '#4888BF'
    },
    postBody: {
        textAlign: 'left',
        marginTop: 5,
        paddingBottom: 20,
    },
});