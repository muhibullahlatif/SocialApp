import React, { useState } from 'react';
import { View, ScrollView, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import Styles from './style';
import Icons from '../../assets/icons';
import Images from '../../assets/images';
import Header from '../../components/HeaderComponent';

const AddNewUserScreen = (props) => {
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    return (
        <>
            <Header 
                LeftPress={() => props.navigation.goBack()}
                LeftIcon={Icons.back_ico}
                MiddleText={'add new user'}
            />
            <ImageBackground source={Images.blur_img} resizeMode="cover" style={Styles.bgImage}>
                <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
                    <View style={Styles.FormContainer}>
                        <View style={Styles.textBoxContainer}>
                            <TextInput
                                style={Styles.inputBoxInner} 
                                placeholder="Enter name here"
                                keyboardType="default"
                                value={fullName}
                                onChangeText={text => {setFullName(text)}}
                            />
                        </View>
                        <View style={Styles.textBoxContainer}>
                            <TextInput
                                style={Styles.inputBoxInner} 
                                placeholder="Enter username here"
                                keyboardType="default"
                                value={userName}
                                onChangeText={text => {setUserName(text)}}
                            />
                        </View>
                        <View style={Styles.textBoxContainer}>
                            <TextInput
                                style={Styles.inputBoxInner} 
                                placeholder="Enter email Address"
                                keyboardType="email-address"
                                value={email}
                                onChangeText={text => {setEmail(text)}}
                            />
                        </View>
                        <View style={Styles.textBoxContainer}>
                            <TextInput
                                style={Styles.inputBoxInner} 
                                placeholder="Enter country here"
                                keyboardType="default"
                                value={country}
                                onChangeText={text => {setCountry(text)}}
                            />
                        </View>
                        <TouchableOpacity
                            style={Styles.submitBtnContainer}
                            activeOpacity={1}
                            onPress={() => alert('Submit')}
                        >
                            <Image source={Icons.next_page_ico} resizeMode="contain" style={Styles.submitIcon} />    
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </>
    );
}

export default AddNewUserScreen;