import * as React from 'react';
import { View, Text,StyleSheet, SafeAreaView, ScrollView,TextInput,Button } from 'react-native';
import { Image,Badge } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import CommentComponent from '../components/CommentComponent'
import CountComponent from '../components/CountComponent'

export default class ProductScreen extends React.Component {

constructor(props) {
super(props)

this.state = {
  element: [],
  
}

}

componentDidMount() {

fetch('http://127.0.0.1:8000/api/product/'+this.props.route.params?.id)
    .then((response) => response.json())
    .then((json) => {
 
       this.setState({element: json })

    })
    .catch((error) => {
      console.error(error);
    });

}

render() {
  	return (
  	<SafeAreaView>
  		<ScrollView>
		    <View  style={styles.maincontainer}>
		    	<View style={styles.container}>
			    	<Image source={require('../images/ps5.jpg')} style={styles.image} />
					<View style={styles.firstcontainer}>
						<View style={styles.productFirstInfo}>
							<Text style={styles.titleh1}>{this.state.element.title}</Text>
							<Text style={styles.describep}>
							{this.state.element.price}
              </Text>
						</View>
					</View>
				</View>
				
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
