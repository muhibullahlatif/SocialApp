import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Styles from './style';
import Icons from '../../assets/icons';
import Images from '../../assets/images';
import Header from '../../components/HeaderComponent';

const { height } = Dimensions.get('window');

const postData = [
    {
        id: '1',
        title: 'Useful filters for your landscape photos',
        body: 'This collection of awesome filters for your landscap…This collection of awesome filters for your landscap…'
    },
    {
        id: '2',
        title: 'Useful filters for your landscape photos',
        body: 'This collection of awesome filters for your landscap…This collection of awesome filters for your landscap…'
    },
    {
        id: '3',
        title: 'Useful filters for your landscape photos',
        body: 'This collection of awesome filters for your landscap…This collection of awesome filters for your landscap…'
    },
    {
        id: '4',
        title: 'Useful filters for your landscape photos',
        body: 'This collection of awesome filters for your landscap…This collection of awesome filters for your landscap…'
    },
];

const HomeScreen = (props) => {

    const renderItem = ({item}) => {
        return (
            <View style={Styles.MainContainer}>
                <View style={Styles.postContainer}>
                    <View style={Styles.userContainer}>
                        <View style={Styles.userImgText}>
                            <Image source={Icons.user_avatar_2_ico} resizeMode="contain" style={Styles.userIcon} />
                            <View style={Styles.TextContainer}>
                                <Text style={Styles.userNameText}>Mille Knudsen</Text>
                                <Text style={Styles.subText}>Linz, Austria</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={Styles.userBtn}
                            activeOpacity={1}
                            onPress={() => {alert('Coming Soon')}}
                        >
                            <Image source={Icons.more_post_ico} resizeMode="contain" style={Styles.nextBtn} />
                        </TouchableOpacity>
                    </View>
                    <Image source={Images.post_img} resizeMode="stretch" style={Styles.postImage} />
                    <View style={Styles.postDetailContainer}>
                        <View style={Styles.detailInner1}>
                            <Image source={Icons.heart_ico} resizeMode="contain" style={Styles.icon1} />
                            <Image source={Icons.comment_ico} resizeMode="contain" style={Styles.icon2} />
                            <Text style={Styles.commentText}>2 hours ago</Text>
                        </View>
                        <View style={Styles.detailInner2}>
                            <Image source={Icons.option_ico} resizeMode="contain" style={Styles.icon3} />
                        </View>
                    </View>
                    <View style={Styles.postTextContainer}>
                        <Text style={Styles.postTitle}>{item.title}</Text>
                        <Text style={Styles.postBody}>{item.body}</Text>
                    </View>
                </View>
            </View>
        );
    }
    return (
        <>
            <Header 
                LeftPress={() => alert("Coming Soon")}
                LeftIcon={Icons.filter_ico}
                MiddleText={'posts'}
                RightPress={() => props.navigation.navigate('AddPost')}
                RightIcon={Icons.add_ico}
            />
            <FlatList 
                contentContainerStyle={{paddingBottom: height * 0.01}}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false} 
                data={postData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </>
    );
}

export default HomeScreen;