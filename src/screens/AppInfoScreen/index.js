import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Styles from './style';
import Icons from '../../assets/icons';
import Header from '../../components/HeaderComponent';

const AppInfoScreen = (props) => {
    return (
        <>
            <Header 
                LeftPress={() => props.navigation.goBack()}
                LeftIcon={Icons.back_ico}
                MiddleText={'app info'}
            />
            <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
                <View style={Styles.MainContainer}>
                    <View style={Styles.infoContainer1}>
                        <Text style={Styles.infoTitle}>About</Text>
                        <Text style={Styles.infoBody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac pellentesque justo. Lorem ipsum consectetur adipiscing elit. Sed ac pellentesque justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac pellentesque justo. Lorem ipsum consectetur adipiscing elit. Sed ac pellentesque justo.</Text>
                    </View>
                    <View style={Styles.infoContainer2}>
                        <Text style={Styles.infoTitle}>Terms & Conditions</Text>
                        <Text style={Styles.infoBody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac pellentesque justo. Lorem ipsum consectetur adipiscing elit. Sed ac pellentesque justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac pellentesque justo. Lorem ipsum consectetur adipiscing elit. Sed ac pellentesque justo.</Text>
                    </View>
                    <View style={Styles.infoContainer3}>
                        <Text style={Styles.infoTitle}>Contact</Text>
                        <Text style={Styles.infoBody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac pellentesque justo. Lorem ipsum consectetur adipiscing elit. Sed ac pellentesque justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac pellentesque justo. Lorem ipsum consectetur adipiscing elit. Sed ac pellentesque justo.</Text>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

export default AppInfoScreen;