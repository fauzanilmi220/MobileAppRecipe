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
  PermissionsAndroid,
  TouchableOpacity
} from 'react-native';

import axios from "axios"
import {API_URL} from "@env"

import Icon  from 'react-native-vector-icons/Ionicons';

import { TextInput } from 'react-native-paper';

import {useSelector, useDispatch } from 'react-redux';
import {editProfile} from "../../Storage/Action/menu"

import * as ImagePicker from 'react-native-image-picker'

import Dialog, { DialogContent, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog';

const EditProfilePage = ({route, navigation}) => {
    const dispatch = useDispatch()
    const auth = useSelector((state)=>state.auth)
    const edit = useSelector((state)=>state.editProfile)

    const [name, setName] = React.useState('');
    const [photo, setPhoto] = React.useState({})

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
        if (name == '') {
          ToastAndroid.show(`Please fill all data`, ToastAndroid.SHORT)
        } else {
          let formData = new FormData()
          formData.append("name",name)
          if (photo[0]?.uri) {
            formData.append("photo",{uri:photo[0].uri,name:photo[0].fileName,type:photo[0].type})
          }
          dispatch(editProfile(auth.data.data.token,formData))
          if (edit.isSuccess && edit.data) {
            auth.data.data.name = name
            auth.data.data.photo = edit.data.data.data[0].photo
            edit.isSuccess && navigation.navigate('BottomNav',{screen: 'Profile'})
          }
          
        }
      }
  
    useEffect(() => {
      setName(auth.data.data.name)
    },[])
  
    return (
      <View style={{backgroundColor: '#C7C7C7' , height: '100%'}}>
        <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'} />
        {/*Banner Recipe*/}
        <View style={{padding: 20}}>
            <TouchableOpacity onPress={() => navigation.pop()} style={{width: '10%'}}>
                <Icon style={{backgroundColor: '#F8F8FA', borderRadius: 15, padding: 7}} name="chevron-back-outline" color={"#8C8C8C"} size={25}/>
            </TouchableOpacity>
            <View style={{flex: 1, alignItems: 'center', marginBottom: 200}}>
                <Image style={{width: 150, height: 150, borderRadius: 75}} source={{uri: photo[0]?.uri ? photo[0]?.uri : auth.data.data.photo}} />
            </View>
            {/*Form Update*/}
            <TextInput mode="outlined" style={styles.input} activeOutlineColor={'#EFC81A'} onChangeText={setName} value={name} placeholder='Name' placeholderTextColor={'#C4C4C4'}/>

            <TouchableOpacity onPress={() => setModalVisible(true)} style={[styles.input, {borderRadius: 5}]}>
                <Text>{photo[0]?.uri ? photo[0].fileName : "Edit Photo"}</Text>
            </TouchableOpacity>

            <Button onPress={() => updateForm()}color={'#EFC81A'} title='UPDATE' />
        </View>
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
    }
  });
  
  export default EditProfilePage;