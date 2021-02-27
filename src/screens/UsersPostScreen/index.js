import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Styles from './style';
import Icons from '../../assets/icons';
import Images from '../../assets/images';
import Header from '../../components/HeaderComponent';
import CustomLoader from '../../components/CustomLoaderComponent';
import WarnAlert from '../../components/WarnAlertComponent';
import AsyncStorage from '@react-native-community/async-storage';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getUserPostData } from '../../redux/actions/appActions';

const { height } = Dimensions.get('window');

const UsersPostScreen = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isWarnAlert, setIsWarnAlert] = useState(false);

    setTimeout(() => {
        setIsWarnAlert(false);
    }, 5000);

    const dispatch = useDispatch();

    const getUserId_PostData = async () => {
        setIsLoading(true);
        const userId = await AsyncStorage.getItem('UserId');
        console.log("Get User Val: ", userId);
        dispatch(getUserPostData(userId));
        setIsLoading(false);
    }

    useEffect(() => {
        getUserId_PostData();
    }, []);

    const { get_user_post } = useSelector((state) => state.app);

    const renderItem = ({ item }) => {
        return (
            <View style={Styles.postContainer}>
                <View style={Styles.postHeader}>
                    <View style={Styles.userContainer}>
                        <View style={Styles.userImgText}>
                            <Image source={Icons.post_avatar_ico} resizeMode="contain" style={Styles.userIcon} />
                            <View style={Styles.TextContainer}>
                                <Text style={Styles.userNameText}>{item.title}</Text>
                                <Text style={Styles.subText}>5:09 PM Wednesday, March {item.id}</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={Styles.userBtn}
                            activeOpacity={1}
                            onPress={() => setIsWarnAlert(true)}
                        >
                            <Image source={Icons.more_post_ico} resizeMode="contain" style={Styles.nextBtn} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.postMiddle}>
                    <Image source={Images.user_post_img} resizeMode="cover" style={Styles.postImage} />
                </View>
                <View style={Styles.postFooter}>
                    <Text style={Styles.postBody}>{item.body}</Text>
                </View>
            </View>
        );
    }
    return (
        <>
            <Header 
                LeftPress={() => props.navigation.goBack()}
                LeftIcon={Icons.back_ico}
                MiddleText={'your timeline'}
            />
            <View style={Styles.MainContainer}>
                <FlatList 
                    contentContainerStyle={{paddingBottom: height * 0.15}}
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false} 
                    data={get_user_post}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            {
                isLoading 
                ?
                    <CustomLoader />
                :
                    null
            }
            {
                    isWarnAlert 
                    ?
                    <WarnAlert
                        mainParentText={"Coming Soon !!!"}
                        subChildText={"We will launch this option in phase 2."}
                    />
                    :
                    null
                }
        </>
    );
}

export default UsersPostScreen;