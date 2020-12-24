import * as React from 'react';
import { View, Text,StyleSheet, SafeAreaView, ScrollView,TextInput,Button } from 'react-native';
import { Image,Badge } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import CommentComponent from '../components/CommentComponent'
import CountComponent from '../components/CountComponent'

export default class ProductScreen extends React.Component {


render() {
  	return (
  	<SafeAreaView>
  		<ScrollView>
		    <View  style={styles.maincontainer}>
		    	<View style={styles.container}>
			    	<Image source={require('../images/ps5.jpg')} style={styles.image} />
					<View style={styles.firstcontainer}>
						<View style={styles.productFirstInfo}>
							<Text style={styles.titleh1}>Ps5 fist console in russia </Text>
							<Text style={styles.describep}>
							Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Officiis sequi repellendus, eos sapiente porro facere sit dolor neque. Maiores, illo. Autem eos quisquam laboriosam deserunt culpa veniam possimus repellendus eius doloremque, ab ducimus quo dicta, dolore maiores optio architecto vitae? Non amet ullam magnam cupiditate veniam recusandae beatae unde, quo corrupti reiciendis, dignissimos id sit aperiam laborum architecto accusantium exercitationem, excepturi tempore, odit reprehenderit adipisci perspiciatis placeat totam. Quas, maxime quod rerum soluta labore neque autem molestiae incidunt earum quaerat a corporis optio quidem unde dolorem commodi rem possimus placeat necessitatibus. Hic perspiciatis unde earum reiciendis repellat quas animi ratione.</Text>
						</View>
					</View>
				</View>
				<CountComponent />
		    </View>
		    <View style={styles.CommentSection}>
		    	<Text style={styles.titleh1}>Comments</Text>
		    	<TextInput placeholder='Title' style={styles.inputTitle} />
		    	<TextInput multiline={true} numberOfLines={2} style={styles.TextArea}  placeholder='Describe'/>
		    	<Button title="SEND" color="#1f8adc"  style={styles.SendButton}/>
		    </View>
		    <View style={styles.listOfComments}>
		    	<CommentComponent title='fdfsf' describe='sfsdf' raiting='4' />
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
    flexDirection: 'column'
  },
  image: {
	width: 200, 
	height: 600,
	borderBottomRightRadius:30
  },
  productFirstInfo: {
  	width:170,
  	marginTop: 40,
  	marginLeft:20,
  	borderRadius:30,
	backgroundColor: 'white',
	padding:15
  },
  firstcontainer: {
  	flex: 1, 
    flexDirection: 'column'
  },
  titleh1: {
  	fontSize:15,
  	fontWeight: 'bold'
  },
  describep: {
  	marginTop: 20,
  	fontSize:10,
  },
  right: {
  	fontSize: 30,
  	width:30,
  	backgroundColor:'white'
  },
  inputTitle: {
  	'borderColor':'black',
  	'borderWidth':1,
  	padding:10,
  	marginBottom:10,
  	borderRadius:30,
  	fontSize:20
  },
  TextArea: {
  	'borderColor':'black',
  	'borderWidth':1,
  	padding:10,
  	marginBottom:10,
  	borderRadius:30,
  	fontSize:20
  },
  CommentSection: {
  	margin:10,
  		backgroundColor: 'white',
	padding:15,
	borderRadius:30
  },
  listOfComments: {
  },

});
