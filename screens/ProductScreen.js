import * as React from 'react';
import { View, Text,StyleSheet, SafeAreaView, ScrollView,TextInput,Button,TouchableHighlight} from 'react-native';
import { Image,Badge } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import CommentComponent from '../components/CommentComponent'
import AsyncStorage from '@react-native-community/async-storage'


export default class ProductScreen extends React.Component {

constructor(props) {
super(props)

this.state = {
  element: [],
  comments: [],
  counter: 1,
  amount: 0,
  price: 0,
  status: ''
}

}

componentDidMount() {

  fetch('http://127.0.0.1:8000/api/product/'+this.props.route.params?.id)
      .then((response) => response.json())
        .then((json) => {

         this.setState({
          element: json,
          amount: parseInt(json.price),
          price: parseInt(json.price),
          comments: json.comments.map((d)=>  
            <CommentComponent 
            title={d.title} 
            describe={d.describe}  
            raiting={d.raiting}  /> )
        })

      })
      .catch((error) => {
        console.error(error);
      });

}

decriment() {
  if(this.state.counter != 1) {
    this.setState({
      counter: parseInt(this.state.counter) - 1,
      price: this.state.price - this.state.amount 
    })
  }
}
increment() {
  this.setState({
    counter: this.state.counter + 1,
    price: this.state.price + this.state.amount 
  })
}

buy() {
  AsyncStorage.getItem('user').then(e=> {
    if (e != null) {
      fetch('http://127.0.0.1:8000/api/tocart',{method:'POST',body: JSON.stringify({id:this.props.route.params?.id,iduser:e, amount: this.state.counter})})
        .then((response) => response.json())
          .then((json) => {

              this.props.navigation.navigate('Profile')
        
            })
            .catch((error) => console.error(error))
        }
    })
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
							{this.state.element.describe}
              </Text>
						</View>
					</View>
				</View>
				
        <View style={styles.buy}>
          <View style={styles.buySection}>
            <View style={styles.buySectionInner}>
              <Button title="←" color="#1f8adc" onPress={this.decriment.bind(this)}/>      
              <Text style={styles.inputAmount}>{this.state.counter}</Text>
              <Button title="→" color="#1f8adc"  onPress={this.increment.bind(this)}/>
            </View>
          </View>
          <View style={styles.costSection}>
            <TouchableHighlight onPress={this.buy.bind(this)} ><Text style={styles.costInner}>{this.state.price}$</Text></TouchableHighlight>
          </View>
      </View>

		    </View>
      
		    <View style={styles.CommentSection}>
		    	<Text style={styles.titleh1}>Comments</Text>
		    	<TextInput placeholder='Title' style={styles.inputTitle} />
		    	<TextInput multiline={true} numberOfLines={2} style={styles.TextArea}  placeholder='Describe'/>
		    	<Button title="SEND" color="#1f8adc" onPress={this.buy.bind(this)}  style={styles.SendButton}/>
		    </View>
		    <View style={styles.listOfComments}>
		    	{this.state.comments}
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
  buySection: {
    flex: 1, 
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingRight:12,
    paddingLeft:12,
    paddingTop:20,
    paddingBottom:20,
    marginLeft:15,
    marginRight:15,
    borderRadius:30,
    marginTop: 20,
    justifyContent:'space-between'
  },
  buySectionInner: {
    flex: 1, 
    flexDirection: 'row',
    alignItems:'center',
    height:50,

    justifyContent:'space-between'
    
  },
    inputAmount: { alignSelf:'center',  borderColor: 'gray',padding:10,textAlign:'center',fontSize:25,width:70 },
  buy: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  costSection: {
    flex: 1, 
    flexDirection: 'column',
    borderWidth:2,
    borderColor: '#ff5454',
    paddingTop:20,
    paddingBottom:20,
    marginRight:15,
    borderRadius:30,
    marginTop: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  costInner: {
    fontSize:35,
    fontWeight:'bold',
    color:'#ff5454'
  },
});
