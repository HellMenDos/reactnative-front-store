import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet, SafeAreaView, ScrollView,Dimensions } from 'react-native';
import { Button,Input,Image } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductComponent from '../components/ProductComponent'


export default class ListScreen extends React.Component  {
  	
constructor(props) {
super(props)

this.state = {
	element: [],
	counter: 0
}

}

componentDidMount() {

fetch('http://127.0.0.1:8000/api/allProducts')
    .then((response) => response.json())
    .then((json) => {
 
    	 this.setState({element: json.map((d) =>
    		<ProductComponent 
        title={d.title}  
        describe={d.describe} 
        id={d.id} price={d.price} 
        route={this.props.navigation} 
        photo={d.photos[0].url}/>
  		)
    })
    })
    .catch((error) => {
      console.error(error);
    });

}
searhFunction(e) {
	fetch('http://127.0.0.1:8000/api/getproducts/'+e.target.value)
    .then((response) => response.json())
    .then((json) => {
 
    	 this.setState({element: json.map((d) =>
    		<ProductComponent 
        title={d.title} 
        describe={d.describe} 
        id={d.id} 
        price={d.price} 
        route={this.props.navigation} 
        photo={d.photos[0].url}/>
  		)
    })
    })
    .catch((error) => {
      console.error(error);
    });

}

render() {
  	return (
  	<View>
	  	<View style={styles.searchSection}>
			<Input placeholder='Search' style={styles.searchInput} onChange={this.searhFunction.bind(this)} />
		</View>
	  	<SafeAreaView style={styles.searchContent}>
	  		<ScrollView>
			    <SafeAreaView>
	  				<ScrollView>
	  					{this.state.element}
	  				</ScrollView>
	  			</SafeAreaView>
			</ScrollView>
		</SafeAreaView>
	</View>
  	);
}
}

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
 searchSection: {
 	flex: 1, 
    flexDirection: 'row',
    paddingTop: 30,
    justifyContent:'center',
    height:85,
    position: 'absolute',
    zIndex:10,
    backgroundColor: 'white',
    borderRadius:30
 },
 searchContent: {
 	marginTop:80,
 	marginBottom:20
 }
});
