import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions, ActivityIndicator } from 'react-native';
import Styles from './style';
import Icons from '../../assets/icons';
import Images from '../../assets/images';
import Header from '../../components/HeaderComponent';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { allPostData } from '../../redux/actions/appActions';
 
const { height } = Dimensions.get('window');

const HomeScreen = (props) => {
    const [pageCurrent, setPageCurrent] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    
    const dispatch = useDispatch();
    const getAllPostsData = () => {
        dispatch(allPostData(10, pageCurrent));
    }

    const { get_all_posts } = useSelector((state) => state.app);

    const [data, setData] = useState(get_all_posts);

    useEffect(() => {
        console.log("Page Size: ", pageCurrent);
        setIsLoading(true);
        getAllPostsData();
        setData(data.concat(get_all_posts));
        setIsLoading(false);
    }, [pageCurrent]);

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
                            <Text style={Styles.commentText}>{item.id} hours ago</Text>
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

    const renderFooter = () => {
        return (
            isLoading ?
            <View style={Styles.moreLoader}>
                <ActivityIndicator size="large" color="#4888BF" />
            </View> : null
        );
    }

    const handleLoadMore = () => {
        setPageCurrent(pageCurrent + 1); 
        setIsLoading(true);
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
                contentContainerStyle={{paddingBottom: height * 0.03}}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false} 
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={renderFooter}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0}
            />
        </>
    );
}

export default HomeScreen;