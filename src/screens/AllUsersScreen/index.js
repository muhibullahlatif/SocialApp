import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Styles from './style';
import Icons from '../../assets/icons';
import Header from '../../components/HeaderComponent';
import CustomLoader from '../../components/CustomLoaderComponent';
import AsyncStorage from '@react-native-community/async-storage';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { allUserData } from '../../redux/actions/appActions';

const { height } = Dimensions.get('window');

const AllUsersScreen = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const getAllUsers = async () => {
        setIsLoading(true);
        dispatch(allUserData());
        setIsLoading(false);
    }
    useEffect(() => {
        getAllUsers();
    }, []);

    const { get_all_users } = useSelector((state) => state.app);

    const onPressUserPost = async (userId) => {
        await AsyncStorage.setItem('UserId', userId.toString());
        props.navigation.navigate('UsersPost');
    }

    const renderItem = ({item}) => {
        return (
            <View style={Styles.mainContainer}>
                <View style={Styles.userContainer}>
                    <View style={Styles.userImgText}>
                        <Image source={Icons.user_avatar_ico} resizeMode="contain" style={Styles.userIcon} />
                        <View style={Styles.TextContainer}>
                            <Text style={Styles.userNameText}>{item.name}</Text>
                            <Text style={Styles.subText}>{item.id}, {item.username}, {item.address.city}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={Styles.userBtn}
                        activeOpacity={1}
                        onPress={() => onPressUserPost(item.id)}
                    >
                        <Image source={Icons.next_page_ico} resizeMode="contain" style={Styles.nextBtn} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    return (
        <>
        <Header 
            LeftPress={() => alert("Coming Soon")}
            LeftIcon={Icons.filter_ico}
            MiddleText={'users'}
            RightPress={() => props.navigation.navigate('AddUser')}
            RightIcon={Icons.add_ico}
        />
        <FlatList 
            contentContainerStyle={{paddingBottom: height * 0.01 }}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false} 
            data={get_all_users}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
        />
        {
            isLoading 
            ?
                <CustomLoader />
            :
                null
        }
    </>
    );
}

export default AllUsersScreen;