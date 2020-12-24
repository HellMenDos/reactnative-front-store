import * as React from 'react';
import { View, Text,StyleSheet, SafeAreaView, ScrollView,TouchableHighlight } from 'react-native';
import { Button,Input,Image,Icon,Badge } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductComponent from '../components/ProductComponent'

export default class HomeScreen extends React.Component {
  	
render() {
  	return (
  	<SafeAreaView>
  		<ScrollView>
		    <View  style={styles.maincontainer}>
		    	<View style={styles.container}>
			    	<Image source={require('../images/ps5.jpg')} style={styles.image} />
					<View style={styles.newproductsconteiner}>
						<TouchableHighlight style={styles.newproducts}>
							<Image source={require('../images/game.jpg')} style={styles.imageSidebar} />
						</TouchableHighlight>
						<TouchableHighlight onPress={() => this.props.navigation.navigate('Product',{id:1})} style={styles.newproducts}>
							<Image source={require('../images/console.jpg')} style={styles.imageSidebar} />
						</TouchableHighlight>
						<TouchableHighlight style={styles.newproducts}>
							<Image source={require('../images/yer.jpg')} style={styles.imageSidebar} />
						</TouchableHighlight>
						<TouchableHighlight style={styles.newproducts}>
							<Image source={require('../images/custom.jpeg')} style={styles.imageSidebar} />
						</TouchableHighlight>
					</View>
				</View>
				<View>
					<ProductComponent title='ffff' describe='ffff' price='100$'/>
					<ProductComponent title='ffff' describe='ffff' price='100$'/>
					<ProductComponent title='ffff' describe='ffff' price='100$'/>
				</View>
		    </View>
		</ScrollView>
	</SafeAreaView>
  	);
}





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
