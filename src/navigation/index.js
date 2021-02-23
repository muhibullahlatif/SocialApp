import 'react-native-gesture-handler';
import React from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';
import Icons from '../assets/icons';
// Navigation Container
import { NavigationContainer } from '@react-navigation/native';
// Stack NavBar
import { createStackNavigator } from '@react-navigation/stack';
// Bottom NavBar
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import Splash from '../screens/SplashScreen';
import Home from '../screens/HomeScreen';
import AppInfo from '../screens/AppInfoScreen';
import AllUsers from '../screens/AllUsersScreen';
import AddUser from '../screens/AddNewUserScreen';
import AddPost from '../screens/AddPostScreen';
import UsersPost from '../screens/UsersPostScreen';
import Setting from '../screens/SettingScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const { width } = Dimensions.get('window');

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#4B7EAD',
        style: {
          backgroundColor: '#FFF',
          height: 55,

        },
        indicatorStyle: {
          backgroundColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        tabBarOptions={{
          showLabel: false,
        }}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => {
            if (focused === true) {
              return <Image source={Icons.home_active} style={styles.navBtn} />;
            } else if (focused === false) {
              return <Image source={Icons.home_unActive} style={styles.navBtn} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="AppInfo"
        component={AppInfo}
        tabBarOptions={{
          showLabel: false,
        }}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => {
            if (focused === true) {
              return <Image source={Icons.app_info_active} style={styles.navBtn} />;
            } else if (focused === false) {
              return <Image source={Icons.app_info_unActive} style={styles.navBtn} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="AllUsers"
        component={AllUsers}
        tabBarOptions={{
          showLabel: false,
        }}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => {
            if (focused === true) {
              return <Image source={Icons.users_active} style={styles.navBtn} />;
            } else if (focused === false) {
              return <Image source={Icons.users_unActive} style={styles.navBtn} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        tabBarOptions={{
          showLabel: false,
        }}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => {
            if (focused === true) {
              return <Image source={Icons.settings_active} style={styles.navBtn} />;
            } else if (focused === false) {
              return <Image source={Icons.settings_unActive} style={styles.navBtn} />;
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
          <Stack.Screen name="AddUser" component={AddUser} />
          <Stack.Screen name="AddPost" component={AddPost} />
          <Stack.Screen name="UsersPost" component={UsersPost} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  navBtn: {
    height: width * 0.06,
    width: width * 0.06,
    resizeMode: 'contain',
  },
});

export default Navigation;
