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

const RequestPasswordPage = ({navigation}) => {
    return (
      <View style={{backgroundColor: '#f7f7f7', height: '100%', alignItems: 'center', paddingTop: 50}}>
        <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'} />
        <Image source={require('../../Asset/lock.png')} style={{marginVertical: 50}} />
        <Text style={{textAlign: 'center', color: '#46505C'}}>Request for reset password send in your email</Text>

        <View style={{width: '90%', marginTop: 400}}>
            <Button onPress={() => navigation.push('ResetPW')} color={'#EFC81A'} title='Check Your Email' />
        </View>
      </View>
    )
};

export default RequestPasswordPage;