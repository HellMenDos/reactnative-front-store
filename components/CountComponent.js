import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { Button,Input,Image,Icon,Badge } from 'react-native-elements';

import { TouchableHighlight } from 'react-native';


export default class CountComponent extends React.Component {

constructor(props) {
super(props)

this.state = {
  counter: 1,
  amount: 100,
  price: 100
}
}

decriment() {
  if(this.state.counter != 1) {
    this.setState({counter: parseInt(this.state.counter) - 1 })
     this.setState({price: this.state.price - this.state.amount})
  }
}
increment() {
  this.setState({counter: this.state.counter + 1 })
  this.setState({price: this.state.price + this.state.amount})
}


render() {
  return (
      <View style={styles.buy}>
          <View style={styles.buySection}>
            <View style={styles.buySectionInner}>
              <Button title="←" color="#1f8adc" onPress={this.decriment.bind(this)}/>      
              <Text style={styles.inputAmount}>{this.state.counter}</Text>
              <Button title="→" color="#1f8adc"  onPress={this.increment.bind(this)}/>
            </View>
          </View>
          <View style={styles.costSection}>
            <Text style={styles.costInner}>{this.state.price}$</Text>
          </View>
      </View>
  );
}
}


const styles = StyleSheet.create({
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