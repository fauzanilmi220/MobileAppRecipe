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
  ActivityIndicator
} from 'react-native';

import axios from "axios"
import {API_URL} from "@env"

import {useSelector, useDispatch } from 'react-redux';
import {getSearchRecipe} from "../../Storage/Action/menu"

import { TextInput } from 'react-native-paper';
import Icon  from 'react-native-vector-icons/Ionicons';

const SearchPage = ({navigation}) => {
    const dispatch = useDispatch()
    const menu = useSelector((state)=>state.searchRecipe)

    const [search, onChangeSearch] = React.useState('');
    const [recipe, setRecipe] = useState();

    useEffect(() => {
      dispatch(getSearchRecipe(search))
    },[search])
  
    useEffect(() => {
      if (menu.data) {
        console.log(menu.data)
      }
    },[menu.data])

    return (
      <View style={{backgroundColor: 'white' , height: '100%'}}>
        <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'} />
        <TextInput mode="outlined" left={<TextInput.Icon icon={'magnify'} iconColor='#C4C4C4' />} style={styles.input} activeOutlineColor={'#C4C4C4'} 
        onChangeText={onChangeSearch} value={search} placeholder='Search Pasta, Bread, etc' placeholderTextColor={'#C4C4C4'}/>
        {/*Recipe Data*/}
        <ScrollView>
            {menu.isLoading ? <ActivityIndicator size="large" color="#EFC81A"/> : menu.data?.map((item,index) => {
                return(
                    <TouchableOpacity key={index+1} onPress={() => navigation.push('DetailRecipe',{id:item.id})}>
                        <View style={{marginLeft: 20}}>
                            <View style={{backgroundColor: 'white',alignItems: 'center', flexDirection: 'row',marginHorizontal: 20, borderRadius: 15, padding: 10}}>
                                <Image style={{marginTop: 5, width: 70, height: 70, borderRadius: 15}} source={{uri: item.photo}} />
                                <View style={{justifyContent: 'space-around', padding: 20}}>
                                    <Text style={{color: 'black', fontWeight: '500', fontSize: 17}}>{item.name}</Text>
                                    <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
                                        <Icon name='star' color={'#FFB200'} size={15}/>
                                        <Text style={{color: 'black', fontWeight: '500'}}> 4.3</Text>
                                        <Text style={{color: '#6E80B0', fontWeight: '500'}}> • </Text>
                                        <Text style={{color: '#6E80B0', fontWeight: '500'}}>{item.category}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
      </View>
    )
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      marginHorizontal: 20,
      marginVertical: 20,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#F5F5F5',
    },
});
  
export default SearchPage;