import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    Main: {
        backgroundColor: '#F1F1F1',
        padding: 5,
    },
    MainContainer: {
        backgroundColor: 'transparent',
        width: width,
        paddingBottom: 15,
    },
    addPostContainer: {
        backgroundColor: '#FFF',
        padding: 10,
        marginBottom: 10,
        shadowColor: "#4888BF",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#EE5F88',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    addPostInnerContainer: {
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    userPostIco: {
        width: 50,
        height: 50
    },
    addPostBtn: {
        width: '85%',
        borderWidth: 1.5,
        borderColor: '#9477D6',
        padding: 7,
        borderRadius: 50,
    },
    addPostText: {
        color: '#777'
    },
    storyContainer: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#4888BF",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },
    storyText: {
        color: '#858997',
        fontSize: width * 0.038,
        fontWeight: '600',
    },
    stories: {
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    storyImg: {
        width: 50,
        height: 50
    },
    postedStories: {
        marginLeft: 10,
        paddingLeft: 1,
        borderLeftWidth: 1,
        borderLeftColor: '#E6E8EE',
    },
    storyAndMoments: {
        borderWidth: 1,
        borderColor: '#EE5F88',
        borderRadius: 50,
        padding: 5,
        margin: 5,
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
        color: '#E06394'
    },
    subText: {
        color: '#7180F5'
    },
    postImage: {
        width: '100%',
        marginTop: 10
    },
    userBtn: {
        marginRight: 10
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
        color: '#C76AAA'
    },
    postBody: {
        textAlign: 'left',
        marginTop: 5,
        paddingBottom: 20,
        color: '#7180F5'
    },
});