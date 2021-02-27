import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    // Header Component
    bgContainer: {
        width: '100%',
    },
    HeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        marginTop: 30,
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
        width: width,
        height: height,
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
    // Error Alert CSS
    alertBgContainer: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height,
        padding: 10,
    },
    alertBgColor: {
        backgroundColor: '#252245',
        width: '100%',
        borderTopWidth: 3,
        borderTopColor: '#FF0046',
    },
    sideCloseContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    alertBodyContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginBottom: 20,
    },
    failedAlertIcon: {
        width: 40,
        height: 40
    },
    alertTextContainer: {
        width: '87%'
    },
    mainAlertText: {
        color: '#FF0046',
        fontSize: width * 0.042,
        fontWeight: '600'
    },
    subAlertText: {
        color: '#A3A0C3',
        fontSize: width * 0.038,
        fontWeight: '600'
    },
    // Success Alert CSS
    alertSuccessBgColor: {
        backgroundColor: '#252245',
        width: '100%',
        borderTopWidth: 3,
        borderTopColor: '#00DC67',
    },
    sideSuccessCloseContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderTopWidth: 3,
        borderTopColor: '#00DC67',
    },
    mainSuccessAlertText: {
        color: '#00DC67',
        fontSize: width * 0.042,
        fontWeight: '600'
    },
    // Warning Alert CSS
    alertWarnBgColor: {
        backgroundColor: '#252245',
        width: '100%',
        borderTopWidth: 3,
        borderTopColor: '#F4B93A',
    },
    sideWarnCloseContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderTopWidth: 3,
        borderTopColor: '#F4B93A',
    },
    mainWarnAlertText: {
        color: '#F4B93A',
        fontSize: width * 0.042,
        fontWeight: '600'
    },
});