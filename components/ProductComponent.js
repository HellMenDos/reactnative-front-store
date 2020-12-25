import * as React from 'react';
import { View, Text,StyleSheet,TouchableHighlight } from 'react-native';
import { Button,Input,Image,Icon,Badge } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';




export default function ProductComponent(props) {
  const navigation = useNavigation();

  return (
  	<TouchableHighlight onPress={() => navigation.navigate('Product',{id:props.id})}>
		<View style={styles.otherproducts}>
			<Image source={{uri: `http://127.0.0.1:8000/images/product/${props.photo}`}} style={styles.imageBottom} />
				<View style={styles.TextBottom}>
					<Text style={styles.TextH1}>{props.title} </Text>
					<Text style={styles.TextP}>{props.describe}</Text>
					<View style={styles.PriceBottom}>
						<Badge value={props.price} status="error" />
					</View>
				</View>
		</View>
	</TouchableHighlight>
  );
}


const styles = StyleSheet.create({
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