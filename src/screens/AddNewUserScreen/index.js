import React, { useState } from 'react';
import { View, ScrollView, Image, TouchableOpacity, ImageBackground, TextInput, ToastAndroid } from 'react-native';
import Styles from './style';
import Icons from '../../assets/icons';
import Images from '../../assets/images';
import Header from '../../components/HeaderComponent';
import CustomLoader from '../../components/CustomLoaderComponent';
import SuccessAlert from '../../components/SuccessAlertComponent';
import ErrorAlert from '../../components/ErrorAlertComponent';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { AddNewUser } from '../../redux/actions/appActions';
// Validations
import { isEmpty, validateEmail } from '../../constants/functions';

const AddNewUserScreen = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [isSuccessAlert, setIsSuccessAlert] = useState(false);
    const [isErrorAlert, setIsErrorAlert] = useState(false);

    const dispatch = useDispatch();

    const submitNewUserData = async () => {
        console.log(fullName, userName, email, country);
        if(isEmpty(fullName) || isEmpty(userName) || isEmpty(email) || isEmpty(country)){
            ToastAndroid.show("Please Fill All Fields", ToastAndroid.LONG, ToastAndroid.BOTTOM);
        }
        else if(!validateEmail(email)){
            ToastAndroid.show("Email is incorrect", ToastAndroid.LONG, ToastAndroid.BOTTOM);
        }
        else{
            setIsLoading(true);
            dispatch(AddNewUser(fullName, userName, email, country));
            setIsLoading(false);
            if(AddNewUser(fullName, userName, email, country)){
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

    const { add_new_user } = useSelector((state) => state.app);
    console.log("Testing -> ", add_new_user);

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
                            onPress={() => submitNewUserData()}
                        >
                            <Image source={Icons.next_page_ico} resizeMode="contain" style={Styles.submitIcon} />    
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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

export default AddNewUserScreen;