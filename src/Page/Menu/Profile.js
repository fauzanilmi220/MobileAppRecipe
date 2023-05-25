import React, {useEffect,useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';

import Icon  from 'react-native-vector-icons/Ionicons';

import {useSelector, useDispatch } from 'react-redux';
import {logout} from "../../Storage/Action/auth"

const ProfilePage = ({navigation}) => {
  const dispatch = useDispatch()
  const auth = useSelector((state)=>state.auth)

  return (
    <View style={{backgroundColor: 'white' , height: '100%'}}>
      <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
      <View style={{backgroundColor: '#EFC81A' , height: '35%', justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: 100, height: 100, borderRadius: 50}} source={{uri: auth.data.data.photo}} />
        <Text style={{color: 'white', fontWeight: '700', fontSize: 17, marginTop: 20}}>{auth.data.data.name}</Text>
      </View>
      {/*Button*/}
      <View style={{marginHorizontal: 10, borderTopStartRadius: 20, borderTopEndRadius: 20, backgroundColor: 'white', alignItems: 'center', marginTop: -40}}>
        <TouchableOpacity onPress={() => navigation.push('EditProfile')} style={{width: '100%', flexDirection: 'row' ,justifyContent: 'space-between', padding: 20}}>
            <Icon style={{marginRight: 5}} name="person-outline" color={"#EFC81A"} size={25}/>
            <Text style={{color: 'black', fontSize: 17}}>Edit Profile</Text>
            <Icon style={{marginRight: 5}} name="chevron-forward-outline" color={"#8C8C8C"} size={25}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('BottomNav',{screen: 'MyRecipe'})} style={{width: '100%', flexDirection: 'row' ,justifyContent: 'space-between', padding: 20}}>
            <Icon style={{marginRight: 5}} name="ribbon-outline" color={"#EFC81A"} size={25}/>
            <Text style={{color: 'black', fontSize: 17}}>My Recipe</Text>
            <Icon style={{marginRight: 5}} name="chevron-forward-outline" color={"#8C8C8C"} size={25}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('BottomNav',{screen: 'Save'})} style={{width: '100%', flexDirection: 'row' ,justifyContent: 'space-between', padding: 20}}>
            <Icon style={{marginRight: 5}} name="bookmark-outline" color={"#EFC81A"} size={25}/>
            <Text style={{color: 'black', fontSize: 17}}>Saved Recipe</Text>
            <Icon style={{marginRight: 5}} name="chevron-forward-outline" color={"#8C8C8C"} size={25}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('BottomNav',{screen: 'Save'})} style={{width: '100%', flexDirection: 'row' ,justifyContent: 'space-between', padding: 20}}>
            <Icon style={{marginRight: 5}} name="thumbs-up-outline" color={"#EFC81A"} size={25}/>
            <Text style={{color: 'black', fontSize: 17}}>Liked Recipe</Text>
            <Icon style={{marginRight: 5}} name="chevron-forward-outline" color={"#8C8C8C"} size={25}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(logout())} style={{width: '100%', flexDirection: 'row' ,justifyContent: 'space-between', padding: 20}}>
            <Icon style={{marginRight: 5}} name="log-out-outline" color={"#EFC81A"} size={25}/>
            <Text style={{color: 'black', fontSize: 17}}>Sign Out</Text>
            <Icon style={{marginRight: 5}} name="chevron-forward-outline" color={"#8C8C8C"} size={25}/>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default ProfilePage;