import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Styles from './style';
import Icons from '../assets/icons';

const HeaderComponent = (props) => {
    return (
        <>
            <View style={Styles.HeaderContainer}>
                <View style={Styles.leftContainer}>
                    <TouchableOpacity 
                        activeOpacity={1}
                        onPress={props.LeftPress}
                    >
                        <Image source={props.LeftIcon} resizeMode="contain" style={Styles.headerLeftIcon} />    
                    </TouchableOpacity>
                </View>
                <View style={Styles.MiddleContainer}>
                    <Text style={Styles.headerMiddleText}>{props.MiddleText}</Text>
                </View>
                {props.RightIcon && props.RightPress 
                ?
                <View style={Styles.rightContainer}>
                    <TouchableOpacity 
                        activeOpacity={1}
                        onPress={props.RightPress}
                    >
                        <Image source={props.RightIcon} resizeMode="contain" style={Styles.headerRightIcon} />    
                    </TouchableOpacity>
                </View>
                :
                <View></View>
                }
            </View>
        </>
    );
}

export default HeaderComponent;