import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon  from 'react-native-vector-icons/Ionicons';

import {useSelector} from 'react-redux';

import LoginPage from './src/Page/Auth/Login'
import RegisterPage from './src/Page/Auth/Register'
import ForgotPasswordPage from './src/Page/Auth/ForgotPW'
import RequestPasswordPage from './src/Page/Auth/RequestPW'
import ResetPasswordPage from './src/Page/Auth/ResetPW'

import HomePage from './src/Page/Menu/Home'
import UploadPage from './src/Page/Menu/Upload'
import MyRecipePage from './src/Page/Menu/myRecipe'
import SavePage from './src/Page/Menu/Save'
import ProfilePage from './src/Page/Menu/Profile'

import SearchPage from './src/Page/Menu/Search'
import PopularPage from './src/Page/Menu/Popular'
import DetailRecipePage from './src/Page/Menu/DetailRecipe'
import EditRecipePage from './src/Page/Menu/EditRecipe'
import EditProfilePage from './src/Page/Menu/EditProfile'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomNav() {
  return (
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#EFC81A',
        tabBarShowLabel:false,
        headerShown: false
      }}>
        <Tab.Screen name="Home" component={HomePage} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Upload" component={UploadPage} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="add-circle-outline" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="MyRecipe" component={MyRecipePage} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="menu-outline" color={color} size={size} />
          ),
        }} 
        />
        <Tab.Screen name="Save" component={SavePage} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="bookmark-outline" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Profile" component={ProfilePage}  options={{
          unmountOnBlur: true,
          tabBarIcon: ({ color, size }) => (
            <Icon name="person-outline" color={color} size={size} />
          ),
        }} />
      </Tab.Navigator>
  );
}

const App = () => {
  const auth = useSelector((state)=>state.auth)
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {
          !auth.data ? 
            <>
              <Stack.Screen name='Login' component={LoginPage}/>
              <Stack.Screen name='Register' component={RegisterPage}/>
              <Stack.Screen name='ForgotPW' component={ForgotPasswordPage}/>
              <Stack.Screen name='RequestPW' component={RequestPasswordPage}/>
              <Stack.Screen name='ResetPW' component={ResetPasswordPage}/>
            </>
          :
            <>
              <Stack.Screen name='BottomNav' component={BottomNav}/>

              <Stack.Screen name='Search' component={SearchPage}/>
              <Stack.Screen name='Popular' component={PopularPage}/>
              <Stack.Screen name='DetailRecipe' component={DetailRecipePage}/>
              <Stack.Screen name='EditRecipe' component={EditRecipePage}/>
              <Stack.Screen name='EditProfile' component={EditProfilePage}/>
            </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
