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

import {useSelector, useDispatch } from 'react-redux';
import {getDetailRecipe} from "../../Storage/Action/menu"

import Icon  from 'react-native-vector-icons/Ionicons';

const DetailRecipePage = ({route, navigation}) => {
  const dispatch = useDispatch()
  const menu = useSelector((state)=>state.detailRecipe)
  const { id } = route.params;

  useEffect(() => {
    dispatch(getDetailRecipe(JSON.stringify(id)))
  },[])

  useEffect(() => {
    if (menu.data) {
      console.log(menu.data)
    }
  },[menu.data])

  return (
    <View style={{backgroundColor: 'white' , height: '100%'}}>
      <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'} />
      {/*Banner Recipe*/}
      <View style={{height: '50%'}}>
        <TouchableOpacity onPress={() => navigation.pop()} style={{position: 'absolute', elevation: 10, zIndex: 10, top: 30, left: 20}}>
            <Icon name="arrow-back" color={"white"} size={25} style={{ textShadowColor: 'black', textShadowOffset: {width:1,height:1}, textShadowRadius: 5}} />
        </TouchableOpacity>
        {menu.data && menu.data.map((item,index) => {
          return(
            <>
              <Image style={{height: '100%', width: '100%'}} source={{uri: item.photo}} />
              <View style={{marginTop: -200, marginHorizontal: 30, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
                  <View style={{width: '70%'}}>
                      <Text style={{color: 'white', fontSize: 40, fontWeight: 'bold', textShadowColor: 'black', textShadowOffset: {width:1,height:1}, textShadowRadius: 5}}>{item.name}</Text>
                      <Text style={{color: 'white', fontWeight: 'bold', width: '70%', textShadowColor: 'black', textShadowOffset: {width:1,height:1}, textShadowRadius: 5}}>By Chef {item.creator}</Text>
                  </View>
                  <TouchableOpacity style={{backgroundColor: '#EFC81A' ,justifyContent: 'center', alignItems: 'center', height: 40, width: 40, borderRadius: 15}}>
                      <Icon name="bookmark-outline" color={"white"} size={25}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={{backgroundColor: 'white' ,justifyContent: 'center', alignItems: 'center', height: 40, width: 40, borderRadius: 15}}>
                      <Icon name="thumbs-up-outline" color={"#EFC81A"} size={25}/>
                  </TouchableOpacity>
              </View>
            </>
          )
        })}
      </View>
      {/*Recipe Ingredients*/}
      <View style={{backgroundColor: 'white', borderRadius: 20, marginTop: -20}}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', padding: 20}}>Ingredients</Text>
        {menu.data && menu.data.map((item,index) => {
          return(
            <Text style={{color: '#666666', fontSize: 15, fontWeight: 'bold', paddingHorizontal: 50, marginTop: 10}}>{item.ingredient}</Text>
          )
        })}
      </View>
    </View>
  )
};

export default DetailRecipePage;