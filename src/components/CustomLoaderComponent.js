import React from 'react';
import { View, Image, Text } from 'react-native';
import Styles from './style';
import Images from '../assets/images';

const LoaderComponent = () => {
    return (
        <View style={Styles.moreLoader}>
            <Image source={Images.app_logo} style={Styles.loaderInner} resizeMode="contain" />
            <Text style={Styles.loaderText}>PLEASE WAIT ...</Text>
        </View> 
    );
}

export default LoaderComponent;