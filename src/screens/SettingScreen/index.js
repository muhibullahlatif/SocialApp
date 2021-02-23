import React from 'react';
import { View, Text, Image } from 'react-native';
import Styles from './style';
import Icons from '../../assets/icons';
import Header from '../../components/HeaderComponent';

const SettingScreen = (props) => {
    return (
        <>
            <Header 
                LeftPress={() => props.navigation.goBack()}
                LeftIcon={Icons.back_ico}
                MiddleText={'settings'}
            />
            <View style={Styles.MainContainer}>
                <View style={Styles.optContainer1}>
                    <Image source={Icons.edit_ico} resizeMode="contain" style={Styles.editIcon} />
                    <Text style={Styles.optText1}>Edit Profile</Text>
                </View>
                <View style={Styles.optContainer2}>
                    <Image source={Icons.deactivate_ico} resizeMode="contain" style={Styles.editIcon} />
                    <Text style={Styles.optText2}>Deactivate Account</Text>
                </View>
            </View>
        </>
    );
}

export default SettingScreen;