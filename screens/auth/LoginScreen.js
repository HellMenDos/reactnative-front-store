import * as React from 'react';
import { View, Text,StyleSheet, SafeAreaView, ScrollView,TextInput } from 'react-native';
import { Image,Badge,Avatar,Input, Button} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class LoginScreen extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    email: '',
    password: ''
  };
};

login() {
  fetch('http://127.0.0.1:8000/api/login/',{method:"POST",body: JSON.stringify({email: this.state.email,password: this.state.password})})
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
    })
    .catch((error) => {
      console.error(error);
    });

}

render() {
  	return (
  	<SafeAreaView>
  		<ScrollView>
          <View style={styles.container}>
              <Text style={styles.cartH1}>Login</Text>
              <Input placeholder='Email' style={{marginTop:30}} onChangeText={(text) => this.setState({email:text})}/>
              <Input placeholder='Password' style={{marginTop:30}} onChangeText={(text) => this.setState({password:text})}/>
              <View style={{width:350}}>
                <Button title="Login" onPress={this.login.bind(this)} buttonStyle={{ marginTop: 10}}/>
                <Button title="Forgetpassword" onPress={() => this.props.navigation.navigate('forget')} buttonStyle={{ marginTop: 10}}/>
                <Button title="registr" onPress={() => this.props.navigation.navigate('registr')} buttonStyle={{ marginTop: 10}}/>
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
