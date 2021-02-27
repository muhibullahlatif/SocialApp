import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Styles from './style';
import Icons from '../assets/icons';

const ErrorAlertComponent = (props) => {
    return (
        <View style={Styles.alertBgContainer}>
            <View style={Styles.alertBgColor}>
                {
                    props.onPress
                    ?
                    <TouchableOpacity 
                        activeOpacity={1}
                        onPress={() => props.onPress}
                        style={Styles.sideWarnCloseContainer}>
                        <Image source={Icons.close_side_ico} resizeMode="contain" />
                    </TouchableOpacity>
                    :
                    null 
                }
                <View style={Styles.alertBodyContainer}>
                    <Image source={Icons.failed_alert_ico} resizeMode="contain" style={Styles.failedAlertIcon} />
                    <View style={Styles.alertTextContainer}>
                        <Text style={Styles.mainAlertText}>{props.mainParentText}</Text>
                        <Text style={Styles.subAlertText}>{props.subChildText}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ErrorAlertComponent;