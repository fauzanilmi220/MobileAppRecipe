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
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native';

import Dialog, { DialogContent, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog';

import axios from "axios"
import {API_URL} from "@env"

import {useSelector, useDispatch } from 'react-redux';
import {getMyRecipe, deleteRecipe} from "../../Storage/Action/menu"

const MyRecipePage = ({navigation}) => {
  const dispatch = useDispatch()
  const auth = useSelector((state)=>state.auth)
  const menu = useSelector((state)=>state.myRecipe)
  const dlt = useSelector((state)=>state.deleteRecipe)

  const [modalVisible, setModalVisible] = useState(false);
  const [modalId, setModalId] = useState();
  
  const deleteMenu = (id) => {
    dispatch(deleteRecipe(auth.data.data.token,id))
  }

  useEffect(() => {
    const reset = navigation.addListener('focus', () => {
      dispatch(getMyRecipe(auth.data.data.token))
    })
    return reset
  },[navigation])

  useEffect(() => {
    if (menu.data) {
      console.log(menu.data)
    }
  },[menu.data])

  useEffect(() => {
    dispatch(getMyRecipe(auth.data.data.token))
  },[dlt])

  return (
    <View style={{backgroundColor: '#f7f7f7' , height: '100%'}}>
      <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'} />
      <Text style={{color:'#EFC81A', fontSize: 30, textAlign: 'center', fontWeight: '500', marginTop: 70}}>My Recipe</Text>
      {/*Data Recipe Column*/}
      <ScrollView>
      {menu.isLoading ? <ActivityIndicator size="large" color="#EFC81A"/> : menu.data?.map((item,index) => {
        return(
          <View key={index+1} style={{backgroundColor: 'white',alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 ,marginHorizontal: 20, borderRadius: 15, padding: 10}}>
            <Image style={{marginTop: 5, width: 70, height: 70, borderRadius: 15}} source={{uri: item.photo}} />
            <View style={{justifyContent: 'space-around', padding: 20,marginTop: -10, marginLeft: -30}}>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 17}}>{item.name}</Text>
                <Text style={{color: 'black', fontWeight: '500'}}>{item.category}</Text>
            </View>
            <View style={{padding: 5}}>
                <View style={{marginBottom: 15}}>
                    <Button onPress={() => navigation.push('EditRecipe',{id:item.id})} color={'#30C0F3'} style={{color: 'white'}} title='Edit' />
                </View>
                <Button onPress={() => {setModalVisible(true); setModalId(item.id)}} color={'#F57E71'} style={{color: 'white'}} title='Delete' />
            </View> 
          </View>
        )
      })}
      </ScrollView>
      {/*Pop Up Delete*/}
      <Dialog
        visible={modalVisible}
        dialogTitle={<DialogTitle title="Are you sure to delete this recipe ?" />}
        onTouchOutside={() => {
          setModalVisible(false)
        }}
        footer={
          <DialogFooter>
            <DialogButton
              text="YES"
              onPress={() => {deleteMenu(modalId); setModalVisible(false)}}
            />
            <DialogButton
              text="CANCEL"
              onPress={() => {setModalVisible(false)}}
            />
          </DialogFooter>
        }
      >
      </Dialog>
    </View>
  )
};

export default MyRecipePage;