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
  PermissionsAndroid,
  ActivityIndicator
} from 'react-native';

import axios from "axios"
import {API_URL} from "@env"

import { TextInput } from 'react-native-paper';

import { Picker } from "@react-native-picker/picker";

import * as ImagePicker from 'react-native-image-picker'

import Dialog, { DialogContent, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog';

import {useSelector, useDispatch } from 'react-redux';
import {editRecipe, getDetailRecipe} from "../../Storage/Action/menu"

const EditRecipePage = ({route,navigation}) => {
  const dispatch = useDispatch()
  const auth = useSelector((state)=>state.auth)
  const edit = useSelector((state)=>state.editRecipe)
  const menu = useSelector((state)=>state.detailRecipe)
  const { id } = route.params;

  const [title, onChangeTitle] = React.useState('');
  const [ingredient, onChangeIngredient] = React.useState('');
  const [category, onChangeCategory] = React.useState(1);
  const [photo, setPhoto] = React.useState({})
  const [listCategory, setListCategory] = React.useState();

  const [modalVisible, setModalVisible] = useState(false);

  const cameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,{
          title: 'App Camera Permission',
          message: 'App need camera permission',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
          buttonNeutral: 'Ask me later'
        }
      )
      if (granted == PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Access Camera Success')
        cameraLaunch()
      } else {
        console.log('Access Camera Failed')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const cameraLaunch = () => {
    let option = {
      storageOption : {
        skipBackup: true,
        path: 'images'
      },
    }
    ImagePicker.launchCamera(option,(res)=>{
      console.log('response =',res)
      if (res.didCancel) {
        console.log('User cancel Image Picker')
      } else if (res.error) {
        console.log('Image Picker error',res.error)
      } else {
        console.log(res)
        setPhoto(res.assets)
      }
    })
  }

  const galleryLaunch = () => {
    let option = {
      storageOption : {
        skipBackup: true,
        path: 'images'
      },
    }
    ImagePicker.launchImageLibrary(option,(res)=>{
      console.log('response =',res)
      if (res.didCancel) {
        console.log('User cancel Image Picker')
      } else if (res.error) {
        console.log('Image Picker error',res.error)
      } else {
        console.log(res)
        setPhoto(res.assets)
      }
    })
  }

  const updateForm = () => {
    let formData = new FormData()
    formData.append("name",title)
    formData.append("ingredient",ingredient)
    formData.append("category_id",category)
    if (photo[0]?.uri) {
      formData.append("photo",{uri:photo[0].uri,name:photo[0].fileName,type:photo[0].type})
    }
    dispatch(editRecipe(auth.data.data.token,formData,JSON.stringify(id)))
    edit.isSuccess && navigation.navigate('BottomNav',{screen: 'MyRecipe'})
  }

  useEffect(() => {
    const dataCategory = async () => {
      const result = await axios.get(API_URL+"/category")
      console.log(result.data.data)
      setListCategory(result.data.data)
    }
    dispatch(getDetailRecipe(JSON.stringify(id)))
    setPhoto({})
    dataCategory()
  },[])

  useEffect(() => {
    if (listCategory) {
      console.log(listCategory)
    }
  },[listCategory])

  useEffect(() => {
    if (menu.data) {
        onChangeTitle(menu.data[0].name)
        onChangeCategory(menu.data[0].category_id)
        onChangeIngredient(menu.data[0].ingredient)
    }
  },[menu.data])

  return (
    <View style={{backgroundColor: '#f7f7f7' , height: '100%'}}>
      <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'} />
      <Text style={{color:'#EFC81A', fontSize: 30, textAlign: 'center', fontWeight: '500', marginTop: 70}}>Edit Your Recipe</Text>
      <SafeAreaView style={{margin: 25}}>
        <TextInput mode="outlined" left={<TextInput.Icon icon={'book-open-blank-variant'} iconColor='#C4C4C4' />} style={styles.input} activeOutlineColor={'#EFC81A'} onChangeText={onChangeTitle} value={title} placeholder='Title' placeholderTextColor={'#C4C4C4'}/>

        <TextInput mode="outlined" multiline={true} style={styles.textarea} activeOutlineColor={'#EFC81A'}  onChangeText={onChangeIngredient} value={ingredient} placeholder='Ingredient' placeholderTextColor={'#C4C4C4'}/>

        <TouchableOpacity onPress={() => setModalVisible(true)} style={[styles.input, {borderRadius: 5}]}>
          <Text>{photo[0]?.uri ? photo[0].fileName : "Add Photo"}</Text>
        </TouchableOpacity>
        
        <Picker 
        selectedValue={category}
        onValueChange={(value, index) => onChangeCategory(value)}
        mode="dropdown" // Android only
        style={[styles.input, {marginBottom: 22}]}
        >
          {!listCategory ? <Picker.Item label={'Loading...'} value={1} />  : listCategory?.map((item,index) => {
            return(
              <Picker.Item key={item.id} label={item.name} value={item.id} />
            )
          })}
        </Picker>

        <Button onPress={() => updateForm()}color={'#EFC81A'} title='UPDATE' />
      </SafeAreaView>
      {/*Pop Up Pick Photo*/}
      <Dialog
        visible={modalVisible}
        dialogTitle={<DialogTitle title="Pick Recipe Photo" />}
        width={'85%'}
        onTouchOutside={() => {
          setModalVisible(false)
        }}
        footer={
          <DialogFooter>
            <DialogButton
              text="Open Camera"
              onPress={() => {cameraPermission(); setModalVisible(false)}}
              textStyle={{fontSize: 15}}
            />
            <DialogButton
              text="Select From Gallery"
              onPress={() => {galleryLaunch(); setModalVisible(false)}}
              textStyle={{fontSize: 15}}
            />
          </DialogFooter>
        }
      >
      </Dialog>
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 12,
    marginBottom: 12,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  textarea: {
    height: 200,
    marginTop: 12,
    marginBottom: 12,
    padding: 1,
    borderRadius: 10,
    backgroundColor: 'white',
  }
});

export default EditRecipePage;