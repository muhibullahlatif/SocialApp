import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    // Header Component
    HeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#4888BF',
        padding: 20,
        paddingTop: 35,
        shadowColor: "#4888BF",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },
    headerLeftIcon: {
        width: width * 0.040
    },
    headerMiddleText: {
        color: '#FFF',
        textTransform: 'uppercase',
        fontSize: width * 0.045,
        fontWeight: '600'
    },
    headerRightIcon: {
        width: width * 0.040
    },
    // Loader Component
    moreLoader: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loaderInner: {
        width: 70,
        height: 70
    },
    loaderText: {
        color: '#FFF',
        fontWeight: 'bold'
    },
});