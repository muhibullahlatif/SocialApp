import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Styles from './style';
import Images from '../assets/images';
// import LinearGradient from 'react-native-linear-gradient';

const HeaderComponent = (props) => {
    return (
        <>
            <ImageBackground source={Images.bg_img} style={Styles.bgContainer}>
                <View style={Styles.HeaderContainer}>
                    {
                        props.LeftIcon && props.LeftPress 
                        ?
                        <View style={Styles.leftContainer}>
                            <TouchableOpacity 
                                activeOpacity={1}
                                onPress={props.LeftPress}
                            >
                                <Image source={props.LeftIcon} resizeMode="contain" style={Styles.headerLeftIcon} />    
                            </TouchableOpacity>
                        </View>
                        :
                        <View></View>
                    }
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
            </ImageBackground>
        </>
    );
}

export default HeaderComponent;