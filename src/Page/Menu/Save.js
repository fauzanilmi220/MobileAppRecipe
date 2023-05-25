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

import Icon  from 'react-native-vector-icons/Ionicons';

const SavePage = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#f7f7f7' , height: '100%'}}>
      <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'} />
      <Text style={{color:'#EFC81A', fontSize: 30, textAlign: 'center', fontWeight: '500', marginTop: 70}}>Save & Like</Text>
      {/*Data Recipe Column*/}
      <View style={{backgroundColor: '#00E092', flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 ,marginHorizontal: 20, borderRadius: 15, padding: 10, alignItems:'center'}}>
        <Image style={{marginTop: 5}} source={require('../../Asset/Home/Pizza.png')} />
        <View style={{justifyContent: 'space-around', padding: 15,marginTop: -10}}>
            <Text style={{color: 'black', fontWeight: '500', fontSize: 17}}>Margherita</Text>
            <Text style={{color: 'black', fontWeight: '500'}}>Spicy</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
                <Icon style={{marginRight: 5}} name="person-outline" color={"#EFC81A"} size={17}/>
                <Text style={{color: '#6E80B0', fontWeight: 'bold'}}>Mareta</Text>
            </View>
        </View>
        <TouchableOpacity style={{backgroundColor: '#EFC81A' ,justifyContent: 'center', alignItems: 'center', height: 40, width: 40, borderRadius: 15}}>
            <Icon name="bookmark-outline" color={"white"} size={25}/>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: 'white' ,justifyContent: 'center', alignItems: 'center', height: 40, width: 40, borderRadius: 15}}>
            <Icon name="thumbs-up-outline" color={"#EFC81A"} size={25}/>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default SavePage;