import React from 'react';
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
  ToastAndroid
} from 'react-native';

import { TextInput } from 'react-native-paper';

import {useSelector, useDispatch } from 'react-redux';
import {register} from "../../Storage/Action/auth"

const RegisterPage = ({navigation}) => {
  const dispatch = useDispatch()
  const auth = useSelector((state)=>state.register)

  const [email, onChangeEmail] = React.useState('');
  const [name, onChangeName] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const RegisterForm = () => {
    let data = {
      name: name,
      email: email,
      password: password
    }
    dispatch(register(data))
    if (auth.data) {
      ToastAndroid.show(`${auth.data.message}`, ToastAndroid.LONG)
      auth.data = null
      navigation.navigate('Login')
    }
  }

  if (auth.isError) {
    ToastAndroid.show(`${auth.errorMessage.message}`, ToastAndroid.SHORT)
    auth.isError = false
    auth.errorMessage = null
  }

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <Image source={require('../../Asset/banner_auth.png')} style={{width: '100%'}} />
      <Text style={{color: '#EFC81A', textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>Welcome !</Text>
      <Text style={{textAlign: 'center', color: '#C4C4C4'}}>Register to Recipe App</Text>
      <SafeAreaView style={{margin: 25}}>
        <TextInput mode="outlined" left={<TextInput.Icon icon={'account-outline'} iconColor='#EFC81A' />} style={styles.input} activeOutlineColor={'#EFC81A'} onChangeText={onChangeName} value={name} placeholder='Name' placeholderTextColor={'#C4C4C4'}/>
        <TextInput mode="outlined" left={<TextInput.Icon icon={'email-outline'} iconColor='#EFC81A'/>} style={styles.input} activeOutlineColor={'#EFC81A'} onChangeText={onChangeEmail} value={email} placeholder='Email' placeholderTextColor={'#C4C4C4'}/>
        <TextInput mode="outlined" secureTextEntry left={<TextInput.Icon icon={'lock-outline'} iconColor='#EFC81A'/>} style={styles.input} activeOutlineColor={'#EFC81A'}  onChangeText={onChangePassword} value={password} placeholder='Password' placeholderTextColor={'#C4C4C4'}/>
        <TouchableOpacity onPress={() => navigation.push('ForgotPW')}>
          <Text style={{marginBottom: 20,textAlign: 'right', color: '#C4C4C4'}}>Forgot Password?</Text>
        </TouchableOpacity>
        <Button onPress={RegisterForm} color={'#EFC81A'} title='Register' />
      </SafeAreaView>
      <Text style={{marginTop: 20,textAlign: 'center', color: '#C4C4C4'}}>Have an account? <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={{color: '#EFC81A'}}>Sign In</Text></TouchableOpacity></Text>
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
    backgroundColor: '#F5F5F5',
  },
});

export default RegisterPage;