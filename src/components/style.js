import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    // Header Component
    HeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF',
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
        color: '#5691C8',
        textTransform: 'uppercase',
        fontSize: width * 0.045,
        fontWeight: '500'
    },
    headerRightIcon: {
        width: width * 0.040
    },
});