import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Styles from './style';
import Icons from '../../assets/icons';
import Images from '../../assets/images';
import Header from '../../components/HeaderComponent';

const { height } = Dimensions.get('window');

const userData = [
    {
        id: '1',
        username: 'Mille Knudsen',
        usercity: 'Linz, Austria'
    },
    {
        id: '2',
        username: 'Mille Knudsen',
        usercity: 'Linz, Austria'
    },
    {
        id: '3',
        username: 'Mille Knudsen',
        usercity: 'Linz, Austria'
    },
    {
        id: '4',
        username: 'Mille Knudsen',
        usercity: 'Linz, Austria'
    },
    {
        id: '5',
        username: 'Mille Knudsen',
        usercity: 'Linz, Austria'
    },
    {
        id: '6',
        username: 'Mille Knudsen',
        usercity: 'Linz, Austria'
    },
    {
        id: '7',
        username: 'Mille Knudsen',
        usercity: 'Linz, Austria'
    },
    {
        id: '8',
        username: 'Mille Knudsen',
        usercity: 'Linz, Austria'
    },
    {
        id: '9',
        username: 'Mille Knudsen',
        usercity: 'Linz, Austria'
    },
    {
        id: '10',
        username: 'Mille Knudsen',
        usercity: 'Linz, Austria'
    },
];

const AllUsersScreen = (props) => {
    const renderItem = ({item}) => {
        return (
            <View style={Styles.mainContainer}>
                <View style={Styles.userContainer}>
                    <View style={Styles.userImgText}>
                        <Image source={Icons.user_avatar_ico} resizeMode="contain" style={Styles.userIcon} />
                        <View style={Styles.TextContainer}>
                            <Text style={Styles.userNameText}>{item.username}</Text>
                            <Text style={Styles.subText}>{item.usercity}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={Styles.userBtn}
                        activeOpacity={1}
                        onPress={() => props.navigation.navigate('UsersPost')}
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
            RightPress={() => alert("Coming Soon")}
            RightIcon={Icons.add_ico}
        />
        <FlatList 
            contentContainerStyle={{paddingBottom: height * 0.01 }}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false} 
            data={userData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    </>
    );
}

export default AllUsersScreen;