import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet, SafeAreaView, ScrollView,TouchableHighlight } from 'react-native';
import { Button,Input,Image,Icon,Badge } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductComponent from '../components/ProductComponent'

export default function HomeScreen({ navigation,props }) {

const [data, setData] = useState([]);

useEffect(() => {
    fetch('http://127.0.0.1:8000/api/allProducts')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))

  }, [])

const listItems = data.map((d) =>
    <ProductComponent title={d.title} id={d.id} describe={d.describe} price={d.price} photo={d.photos[0].url}/>
  );


return (
  	<SafeAreaView>
  		<ScrollView>
		    <View  style={styles.maincontainer}>
		    	<View style={styles.container}>
			    	<Image source={require('../images/ps5.jpg')} style={styles.image} />
					<View style={styles.newproductsconteiner}>
						<TouchableHighlight   onPress={() => navigation.navigate('List',{input:'games'})}  style={styles.newproducts}>
							<Image source={require('../images/game.jpg')} style={styles.imageSidebar} />
						</TouchableHighlight>
						<TouchableHighlight onPress={() => navigation.navigate('List',{input:'console'})} style={styles.newproducts}>
							<Image source={require('../images/console.jpg')} style={styles.imageSidebar} />
						</TouchableHighlight>
						<TouchableHighlight  onPress={() => navigation.navigate('List',{input:'attr'})}  style={styles.newproducts}>
							<Image source={require('../images/yer.jpg')} style={styles.imageSidebar} />
						</TouchableHighlight>
						<TouchableHighlight  onPress={() => navigation.navigate('List',{input:'custom'})}  style={styles.newproducts}>
							<Image source={require('../images/custom.jpeg')} style={styles.imageSidebar} />
						</TouchableHighlight>
					</View>
				</View>
				<View>
					{listItems}
				</View>
		    </View>
		</ScrollView>
	</SafeAreaView>
  	);

}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row',
    height:600
  },
  maincontainer: {
    flex: 1, 
    flexDirection: 'column',
    marginBottom:40
  },
  image: {
	width: 250, 
	height: 600,
	borderBottomRightRadius:30
  },
  newproducts: {
  	flex: 1, 
    flexDirection: 'row',
  	width:100,
  	height:100,
  	marginTop: 40,
  	marginLeft:30,
  	borderRadius:30,
	backgroundColor: 'white',
	justifyContent:'center',
	alignItems:'center'
  },
  newproductsconteiner: {
  	flex: 1, 
    flexDirection: 'column'
  },
  otherproducts: {
  	flex: 1, 
  	flexDirection: 'row',
	alignItems:'center', 	
  	backgroundColor: 'white',
  	height: 150,
  	marginLeft:30,
  	marginRight:30,
  	borderRadius:30,
  	marginTop: 20,

  },
  imageSidebar: {
  	width:80,
  	height:80,
  	borderRadius:30
  },
  imageBottom: {
  	width:120,
  	height:120,
  	borderRadius:30,
  	marginLeft:20
  },
  TextBottom: {
  	alignSelf: 'flex-start',
  	marginTop:20,
  	marginLeft:10
  },
  TextH1: {
  	fontSize: 30,
  	fontWeight: 'bold',
  	letterSpacing:5,
  },
  TextP: {
  	width:170,
	fontSize: 10,
  },
  PriceBottom: {
  		flex: 1, 
  	flexDirection: 'row',
  	justifyContent: 'flex-end'
  }
});
