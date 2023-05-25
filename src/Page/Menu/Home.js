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

const HomePage = ({navigation}) => {
    const [search, onChangeSearch] = React.useState('');
  
    return (
      <View style={{backgroundColor: 'white' , height: '100%'}}>
        <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'} />
        {/*Search Bar*/}
        <TouchableOpacity onPress={() => navigation.push('Search')}>
            <TextInput editable={false} selectTextOnFocus={false} mode="outlined" left={<TextInput.Icon icon={'magnify'} iconColor='#C4C4C4' />} style={styles.input} activeOutlineColor={'#C4C4C4'} onChangeText={onChangeSearch} value={search} placeholder='Search Pasta, Bread, etc' placeholderTextColor={'#C4C4C4'}/>
        </TouchableOpacity>
        
        <View style={{marginLeft: 20}}>
            {/*Popular Recipe*/}
            <View style={{flexDirection: 'row', marginEnd: 20, alignItems: 'baseline', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{fontWeight: '400', fontSize: 20, color: 'black'}}>Popular Recipes</Text>
                    <Text style={{fontWeight: 'bold'}}>Populer check</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.push('Popular')}>
                    <Text style={{color: '#6D61F2'}}>More info</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} style={{flexDirection: 'row', marginVertical: 15}}>
                <TouchableOpacity>
                    <View style={{marginRight: 20, marginBottom: 15}}>
                        <Image source={require('../../Asset/Home/egg_salad.png')} />
                        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', marginTop: -65, marginLeft: 20,width: '50%'}}>Sandwich with Egg</Text>
                    </View>
                </TouchableOpacity>
                <View style={{marginRight: 20}}>
                    <Image source={require('../../Asset/Home/egg_salad.png')} />
                    <Text style={{fontSize: 20, color: 'white', marginTop: -65, marginLeft: 20,width: '40%'}}>Chicken Steak</Text>
                </View>
            </ScrollView>
            {/*New Recipe*/}
            <View style={{flexDirection: 'row', marginTop: 30,marginEnd: 20, alignItems: 'baseline', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: '400', fontSize: 20, color: 'black'}}>New Recipes</Text>
                <Text style={{color: '#6D61F2'}}>More info</Text>
            </View>
            <View style={{flexDirection: 'row', marginVertical: 20}}>
                <View style={{marginRight: 20}}>
                    <Image style={{height: 75, width: 75}} source={require('../../Asset/Home/pan.png')} />
                    <Text style={{marginTop: 7, textAlign: 'center', color: 'black'}}>Soup</Text>
                </View>
                <View style={{marginRight: 20}}>
                    <Image style={{height: 75, width: 75}} source={require('../../Asset/Home/pan.png')} />
                    <Text style={{marginTop: 7, textAlign: 'center', color: 'black'}}>Chicken</Text>
                </View>
                <View style={{marginRight: 20}}>
                    <Image style={{height: 75, width: 75}} source={require('../../Asset/Home/pan.png')} />
                    <Text style={{marginTop: 7, textAlign: 'center', color: 'black'}}>Seafood</Text>
                </View>
                <View style={{marginRight: 20}}>
                    <Image style={{height: 75, width: 75}} source={require('../../Asset/Home/pan.png')} />
                    <Text style={{marginTop: 7, textAlign: 'center', color: 'black'}}>Dessert</Text>
                </View>
            </View>
            {/*Popular For You*/}
            <Text style={{fontWeight: '400', fontSize: 20, marginVertical: 10,color: 'black'}}>Popular For You</Text>
            <ScrollView horizontal={true} style={{flexDirection: 'row', marginVertical: 15}}>
                <View style={{marginRight: 20}}>
                    <Image source={require('../../Asset/Home/egg_salad.png')} />
                    <View style={{backgroundColor: 'white', marginTop: -65, paddingVertical: 10, borderBottomEndRadius: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black',  marginLeft: 20}}>Beef Steak</Text>
                        <Text style={{fontWeight: 'bold', color: 'black', marginLeft: 20}}>Beef steak with nopales, tartare ....</Text>
                    </View>
                </View>
                <View style={{marginRight: 20}}>
                    <Image source={require('../../Asset/Home/egg_salad.png')} />
                    <View style={{backgroundColor: 'white', marginTop: -65, paddingVertical: 10, borderBottomEndRadius: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black',  marginLeft: 20}}>Spaghetti</Text>
                        <Text style={{fontWeight: 'bold', color: 'black', marginLeft: 20}}>Crbonara sauce with grilled ...</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
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
  
export default HomePage;