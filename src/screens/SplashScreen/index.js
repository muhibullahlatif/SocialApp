import React, { useState } from 'react';
import { View, Image } from 'react-native';
import Styles from './style';
import Images from '../../assets/images';

const SplashScreen = (props) => {
    setTimeout(() => {
        props.navigation.navigate('HomeTabs');
    }, 3000);
    return (
        <View>
            <Image source={Images.splash_img} resizeMode="cover" style={Styles.MainContainer} />
        </View>
    );
}

export default SplashScreen;