import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { Calls, Chat, Profile, Wallet } from '../../screens';

const BottomTabNavigation = () => {
    const Tab = createBottomTabNavigator();

    const screenOptions:BottomTabNavigationOptions = {
        // tabShowLabel:false,
        tabBarHideOnKeyboard:true,
        headerShown:false,
        tabBarStyle:{
          position:"absolute",
          bottom:0,
          right:0,
        //   elavation:0,
          height:50
        }
      }
    return (
        <SafeAreaView>
            <Tab.Navigator screenOptions={screenOptions}>
               <Tab.Screen name='chat' component={Chat} />
               <Tab.Screen name='phone' component={Calls} />
               <Tab.Screen name='wallet' component={Wallet} />
               <Tab.Screen name='profile' component={Profile} />
            </Tab.Navigator>
        </SafeAreaView>
    );
}

export default BottomTabNavigation;
