import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import {useFonts} from 'expo-font'
import { SafeAreaView } from 'react-native-safe-area-context';
import {  Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import * as SplashScreen from 'expo-splash-screen'
import {NavigationContainer} from '@react-navigation/native';
import { BottomTabNavigation } from './components';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    semibold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
  })

  const onLayoutRootView = useCallback(async() => {
     if(fontsLoaded){
      await SplashScreen.hideAsync();
     }  
  },[fontsLoaded])

  if(!fontsLoaded){
    return null;
  }

  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Bottom Navigation" component={BottomTabNavigation} options={{headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

