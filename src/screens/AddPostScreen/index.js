import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, TextInput, ToastAndroid } from 'react-native';
import Styles from './style';
import Icons from '../../assets/icons';
import Images from '../../assets/images';
import Header from '../../components/HeaderComponent';
import CustomLoader from '../../components/CustomLoaderComponent';
import SuccessAlert from '../../components/SuccessAlertComponent';
import ErrorAlert from '../../components/ErrorAlertComponent';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { AddNewPost } from '../../redux/actions/appActions';
// Validations
import { isEmpty } from '../../constants/functions';

const AddPostScreen = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [isSuccessAlert, setIsSuccessAlert] = useState(false);
    const [isErrorAlert, setIsErrorAlert] = useState(false);

    const dispatch = useDispatch();

    const submitNewPostData = async () => {
        console.log(postTitle, postBody);
        if(isEmpty(postTitle) || isEmpty(postBody)){
            ToastAndroid.show("Please Fill All Fields", ToastAndroid.LONG, ToastAndroid.BOTTOM);
        }
        else{
            setIsLoading(true);
            dispatch(AddNewPost(postTitle, postBody));
            setIsLoading(false);
            if(AddNewPost(postTitle, postBody)){
                setIsSuccessAlert(true);
                setTimeout(() => {
                    setIsSuccessAlert(false);
                }, 3000);
            }
            else{
                setIsErrorAlert(true);
                setTimeout(() => {
                    setIsErrorAlert(false);
                }, 3000);
            }
        }
    }

    const { add_new_post } = useSelector((state) => state.app);
    console.log("Testing -> ", add_new_post);

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
                            <TouchableOpacity 
                                style={Styles.saveBtnContainer}
                                activeOpacity={1}
                                onPress={() => submitNewPostData()}>
                                <Image source={Icons.submit_ico} resizeMode="contain" style={Styles.submitIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            {
                isLoading
                ?
                    <CustomLoader />
                : 
                null
            }
            {
                isSuccessAlert 
                ?
                <SuccessAlert
                    mainParentText={"Success !!!"}
                    subChildText={"Post added successfully."}
                />
                :
                null
            }
            {
                isErrorAlert 
                ?
                <ErrorAlert
                    mainParentText={"Failed !!!"}
                    subChildText={"Oh! Please try again."}
                />
                :
                null
            }
        </>
    );
}

export default AddPostScreen;