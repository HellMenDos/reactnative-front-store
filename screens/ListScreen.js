import * as React from 'react';
import { View, Text,StyleSheet, SafeAreaView, ScrollView,Dimensions } from 'react-native';
import { Button,Input,Image } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductComponent from '../components/ProductComponent'


export default class ListScreen extends React.Component {
  	
render() {
  	return (
  	<View>
	  	<View style={styles.searchSection}>
			<Input placeholder='Search' style={styles.searchInput} />
		</View>
	  	<SafeAreaView style={styles.searchContent}>
	  		<ScrollView>
			    <SafeAreaView>
	  				<ScrollView>
	  					<ProductComponent title='ffff' describe='ffff' price='100$'/>
						<ProductComponent title='ffff' describe='ffff' price='100$'/>
						<ProductComponent title='ffff' describe='ffff' price='100$'/>
						<ProductComponent title='ffff' describe='ffff' price='100$'/>
						<ProductComponent title='ffff' describe='ffff' price='100$'/>
						<ProductComponent title='ffff' describe='ffff' price='100$'/>

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
