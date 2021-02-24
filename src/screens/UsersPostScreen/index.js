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
        postTitle: 'repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem',
        postBody: 'eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam',
    },
    {
        id: '2',
        postTitle: 'repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem',
        postBody: 'eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam',
    },
    {
        id: '3',
        postTitle: 'repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem',
        postBody: 'eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam',
    },
    {
        id: '4',
        postTitle: 'repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem',
        postBody: 'eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam',
    },
];

const UsersPostScreen = (props) => {
    const renderItem = ({ item }) => {
        return (
            <View style={Styles.postContainer}>
                <View style={Styles.postHeader}>
                    <View style={Styles.userContainer}>
                        <View style={Styles.userImgText}>
                            <Image source={Icons.post_avatar_ico} resizeMode="contain" style={Styles.userIcon} />
                            <View style={Styles.TextContainer}>
                                <Text style={Styles.userNameText}>{item.postTitle}</Text>
                                <Text style={Styles.subText}>5:09 PM Wednesday, March 1</Text>
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
                </View>
                <View style={Styles.postMiddle}>
                    <Image source={Images.post_img} resizeMode="cover" style={Styles.postImage} />
                </View>
                <View style={Styles.postFooter}>
                    <Text style={Styles.postBody}>{item.postBody}</Text>
                </View>
            </View>
        );
    }
    return (
        <>
            <Header 
                LeftPress={() => props.navigation.goBack()}
                LeftIcon={Icons.back_ico}
                MiddleText={'your all posts'}
            />
            <View style={Styles.MainContainer}>
                <FlatList 
                    contentContainerStyle={{paddingBottom: height * 0.11}}
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false} 
                    data={postData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    );
}

export default UsersPostScreen;