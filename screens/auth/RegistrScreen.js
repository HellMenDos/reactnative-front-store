import * as React from 'react';
import { View, Text,StyleSheet, SafeAreaView, ScrollView,TextInput } from 'react-native';
import { Image,Badge,Avatar,Input, Button} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage'


export default class RegistrScreen extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };
};

registr() {
  if (this.state.password == this.state.confirm) {
  fetch('http://127.0.0.1:8000/api/registr/',{method:"POST",body: JSON.stringify({email: this.state.email,password: this.state.password,name:this.state.name})})
    .then((response) => response.json())
    .then( async (json) => {
        console.log(json)
        if (json.error) {
          var error = Object.keys(json.error)[0];

          this.setState({error: <Badge status="error" value={<Text>{json.error[error][0]}</Text>} />})
        }else {
        
       await AsyncStorage.setItem('user', json.success.id);
          this.props.navigation.navigate('profile')
        }
    })
    .catch((error) => {
      console.error(error);
    });
  }else {
    this.setState({error: <Badge status="error" value={<Text>Password dont match</Text>} />})
  }
}

render() {


  	return (
  	<SafeAreaView>
  		<ScrollView>
          <View style={styles.container}>
              <Text style={styles.cartH1}>Registr</Text>
              { this.state.error }
              <Input placeholder='Name' style={{marginTop:30}}   onChangeText={(text) => this.setState({name:text})}/>
              <Input placeholder='Email' style={{marginTop:30}} onChangeText={(text) => this.setState({email:text})}/>
              <Input placeholder='Password' style={{marginTop:30}} onChangeText={(text) => this.setState({password:text})}/>
              <Input placeholder='Confirm Password' onChangeText={(text) => this.setState({confirm:text})} style={{marginTop:30}}/>
              <View style={{width:350}}>
                <Button title="Registr" onPress={this.registr.bind(this)}  />
              </View>
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
