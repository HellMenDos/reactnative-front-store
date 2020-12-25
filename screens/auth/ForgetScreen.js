import * as React from 'react';
import { View, Text,StyleSheet, SafeAreaView, ScrollView,TextInput } from 'react-native';
import { Image,Badge,Avatar,Input, Button} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ForgetScreen extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    email: ''
  };
};

forget() {
  fetch('http://127.0.0.1:8000/api/forget/',{method:"POST",body: JSON.stringify({email: this.state.email })})
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
              <Text style={styles.cartH1}>Forget password</Text>
              <Input placeholder='Name' style={{marginTop:30}}  onChangeText={(text) => this.setState({email:text})} />
              <View style={{width:350}}>
                <Button title="Change" onPress={this.forget.bind(this)} />
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
