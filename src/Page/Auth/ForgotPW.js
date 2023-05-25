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

const ForgotPasswordPage = ({navigation}) => {
    const [email, onChangeEmail] = React.useState('');
  
    return (
      <View style={{backgroundColor: '#f7f7f7', height: '100%', alignItems: 'center', paddingTop: 50}}>
        <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'} />
        <Image source={require('../../Asset/lock.png')} style={{marginVertical: 50}} />
        <Text style={{color: '#EFC81A', textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>Forgot Password?</Text>
        <Text style={{textAlign: 'center', color: '#C4C4C4'}}>We just need your registered e-mail addres to send your password reset</Text>
        <SafeAreaView style={{margin: 25, width: '90%'}}>
            <TextInput mode="outlined" left={<TextInput.Icon icon={'account-outline'} iconColor='#EFC81A'/>} style={styles.input} activeOutlineColor={'#EFC81A'} onChangeText={onChangeEmail} value={email} placeholder='Email' placeholderTextColor={'#C4C4C4'}/>
            <Button onPress={() => navigation.push('RequestPW')} color={'#EFC81A'} title='Reset Password' />
        </SafeAreaView>
      </View>
    )
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      marginTop: 12,
      marginBottom: 250,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#F5F5F5',
    },
  });

export default ForgotPasswordPage;