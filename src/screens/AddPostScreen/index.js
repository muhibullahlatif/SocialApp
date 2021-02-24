import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import Styles from './style';
import Icons from '../../assets/icons';
import Images from '../../assets/images';
import Header from '../../components/HeaderComponent';

const AddPostScreen = (props) => {
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    return (
        <>
            <Header 
                LeftPress={() => props.navigation.goBack()}
                LeftIcon={Icons.back_ico}
                MiddleText={'add new post'}
            />
            <ImageBackground source={Images.blur_img} resizeMode="cover" style={Styles.bgImage}>
                <View style={Styles.FormContainer}>
                    <View style={Styles.textTitleContainer}>
                        <TextInput
                            style={Styles.inputTitleInner} 
                            placeholder="Post title write here"
                            keyboardType="default"
                            value={postTitle}
                            onChangeText={text => {setPostTitle(text)}}
                            autoFocus={true}
                        />
                    </View>
                    <View style={Styles.textBodyContainer}>
                        <TextInput 
                            style={Styles.inputBodyInner} 
                            placeholder="What would you like to post?"
                            keyboardType="default"
                            multiline={true}
                            value={postBody}
                            onChangeText={text => {setPostBody(text)}}
                        />
                        <View style={Styles.textBodyFooter}>
                            <View style={Styles.extrasContainer}>
                                <Image source={Icons.attachment_ico} resizeMode="contain" style={Styles.attachIcon} />
                                <Image source={Icons.camera_ico} resizeMode="contain" style={Styles.cameraIcon} />
                            </View>
                            <View style={Styles.saveBtnContainer}>
                                <Image source={Icons.submit_ico} resizeMode="contain" style={Styles.submitIcon} />
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </>
    );
}

export default AddPostScreen;