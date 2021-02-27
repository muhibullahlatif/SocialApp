import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions, ActivityIndicator } from 'react-native';
import Styles from './style';
import Icons from '../../assets/icons';
import Images from '../../assets/images';
import Header from '../../components/HeaderComponent';
import CustomLoader from '../../components/CustomLoaderComponent';
import storyData from '../../constants/config';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { allPostData } from '../../redux/actions/appActions';
 
const { width, height } = Dimensions.get('window');

const HomeScreen = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    
    const dispatch = useDispatch();
    const getAllPosts = async () => {
        dispatch(allPostData(10, 1));
    }
    useEffect(() => {
        getAllPosts();
        setIsLoading(false);
    }, []);

    const { get_all_posts } = useSelector((state) => state.app);

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

    const storyRenderItem = ({item}) => {
        return (
            <View style={Styles.storyAndMoments}>
                <Image source={item.image} resizeMode="cover" style={Styles.storyImg} />
            </View>
        );
    }
    
    return (
        <>
            <Header 
                MiddleText={'news feed'}
            />
            <View style={Styles.Main}>
                <View style={Styles.addPostContainer}>
                    <View style={Styles.addPostInnerContainer}>
                        <Image source={Icons.user_avatar_ico} resizeMode="contain" style={Styles.userPostIco} />
                        <TouchableOpacity 
                            style={Styles.addPostBtn}
                            activeOpacity={1}
                            onPress={() => props.navigation.navigate('AddPost')}>
                            <Text style={Styles.addPostText}>What's on your mind?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.storyContainer}>
                    <Text style={Styles.storyText}>Stories & Moments</Text>
                    <View style={Styles.stories}>
                        <View style={Styles.addStory}>
                            <Image source={Icons.add_story_ico} resizeMode="contain" />
                        </View>
                        <View style={Styles.postedStories}>
                            <FlatList
                                contentContainerStyle={{ paddingRight: 60}}
                                showsHorizontalScrollIndicator={false} 
                                horizontal={true}
                                scrollEnabled={true}
                                data={storyData.storiesData}
                                renderItem={storyRenderItem}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </View>
                </View>
                <FlatList 
                    contentContainerStyle={{paddingBottom: height * 0.45}}
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false} 
                    data={get_all_posts}
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
            </View>
        </>
    );
}

export default HomeScreen;