import * as React from 'react';
import { View, Text,StyleSheet, SafeAreaView, ScrollView,TextInput } from 'react-native';
import { Image,Badge,Avatar,Input, Button} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import CartComponent from '../components/CartComponent'
import AsyncStorage from '@react-native-community/async-storage'


export default class ProfileScreen extends React.Component {

constructor(props) {
  super(props)

  this.state = {
  id:'',
  name: '',
  email: '',
  avatar: '',
  cart: ''
  }


}


componentDidMount() {

  AsyncStorage.getItem('user').then(e=> {
    fetch('http://127.0.0.1:8000/api/user/'+e)
    .then((response) => response.json())
      .then((json) => {
          
          this.setState({ 
            name: json.name, 
            email: json.email, 
            id: json.id
          })

          if (json.avatar != undefined) {
              this.setState({avatar: <Image source={{uri: `http://127.0.0.1:8000/images/${json.avatar}`}} style={{ width:150,height:150 }} /> })
          }else {
              this.setState({avatar: <Avatar size="xlarge" icon={{name: 'rocket', color: 'orange', type: 'font-awesome'}} overlayContainerStyle={{backgroundColor: 'white'}} onPress={() => console.log("Works!")} activeOpacity={0.7} /> })
          }

           fetch('http://127.0.0.1:8000/api/cart/'+json.id)
            .then((response) => response.json())
              .then((json) => {
             this.setState({
               cart: json.map((d)=> <CartComponent title={d.product[0].title} describe={d.product[0].describe} id={d.product[0].id} price={d.product[0].price} />  )
             })
            })
            .catch((error) => {
              console.error(error);
            });


            })
            .catch((error) => {
              console.error(error);
            });

  })

}

change() {
     fetch('http://127.0.0.1:8000/api/update/',{method:"POST",body: JSON.stringify({email: this.state.email,id: this.state.id,name:this.state.name})})
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
    })
    .catch((error) => {
      console.error(error);
    });
}

exit() {
  AsyncStorage.clear()
  this.props.navigation.navigate('login')
}



render() {
  	return (
  	<SafeAreaView>
  		<ScrollView>
          <View style={styles.container}>
              {this.state.avatar}
              <Input placeholder='Name' value={this.state.name} onChangeText={(text) => this.setState({name:text})} style={{marginTop:30}}/>
              <Input placeholder='Email' value={this.state.email} onChangeText={(text) => this.setState({email:text})} style={{marginTop:30}}/>
              <View style={{width:350}}>
                <Button title="Change" onPress={this.change.bind(this)} />
                <Button title="Exit" onPress={this.exit.bind(this)} />
              </View>
          </View>
          <View style={styles.cartInner}>
            <Text style={styles.cartH1}>Cart Inner</Text>
              {this.state.cart}
          </View>
		</ScrollView>
	</SafeAreaView>
  	);
}





}

const styles = StyleSheet.create({
container: {
  flex:1,
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  marginTop:80,
  width: 350,
  marginLeft: 'auto',
  marginRight: 'auto'
},
cartInner: {
  width: 350,
  marginLeft: 'auto',
  marginRight: 'auto'
},
cartH1: {
  marginTop:20,
  fontSize:30,
  fontWeight:'bold'
},
});
