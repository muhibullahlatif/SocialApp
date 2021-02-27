import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    MainContainer: {
        padding: 10,
    },
    postContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: "#4888BF",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    userContainer: {
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
        marginLeft: 10,
        width: '80%'
    },
    userNameText: {
        color: '#E06394'
    },
    subText: {
        color: '#858997'
    },
    postImage: {
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
    },
    postFooter: {
        marginLeft: 10,
        marginBottom: 20
    },
    postBody: {
        color: '#7180F5'
    },
});