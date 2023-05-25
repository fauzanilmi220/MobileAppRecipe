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
  TouchableOpacity
} from 'react-native';

import { TextInput } from 'react-native-paper';

const ResetPasswordPage = ({navigation}) => {
    const [password, onChangePassword] = React.useState('');
    const [confirm, onChangeConfirm] = React.useState('');
  
    return (
      <View style={{backgroundColor: '#f7f7f7', height: '100%', alignItems: 'center', paddingTop: 50}}>
        <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'} />
        <Image source={require('../../Asset/lock.png')} style={{marginVertical: 50}} />
        <SafeAreaView style={{margin: 25, width: '90%'}}>
            <TextInput secureTextEntry mode="outlined" left={<TextInput.Icon icon={'lock-outline'} iconColor='#EFC81A'/>} style={styles.input} activeOutlineColor={'#EFC81A'} onChangeText={onChangePassword} value={password} placeholder='Create New Password' placeholderTextColor={'#C4C4C4'}/>
            <TextInput secureTextEntry mode="outlined" left={<TextInput.Icon icon={'lock-open-variant-outline'} iconColor='#EFC81A'/>} style={[styles.input, {marginBottom: 230}]} activeOutlineColor={'#EFC81A'} onChangeText={onChangeConfirm} value={confirm} placeholder='New Password' placeholderTextColor={'#C4C4C4'}/>
            <Button onPress={() => navigation.navigate('Login')} color={'#EFC81A'} title='Reset Password' />
        </SafeAreaView>
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

export default ResetPasswordPage;