import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { Button,Input,Image,Icon,Badge } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native';


export default function CartComponent(props) {

  const navigation = useNavigation();

  return (
  	<TouchableHighlight onPress={() => navigation.navigate('Product',{id:props.id})}>
      <View  style={styles.CommentInner}>
            <View style={styles.infoCommentSection}>
              <Text style={styles.commentH1}>{props.title}</Text>
              <Text style={styles.commentp}>{props.describe}</Text>
              <Text style={styles.commentp}>Price: {props.price}</Text>
            </View>
      </View>
	</TouchableHighlight>
  );
}


const styles = StyleSheet.create({
  imageComment: {
    width: 60, 
  borderBottomRightRadius:30
  },
  CommentInner: {
    margin:10,
    backgroundColor: 'white',
  padding:15,
  borderRadius:30,
  flex: 1, 
    flexDirection: 'row',
    alignItems:'center'
  },
  infoCommentSection: {
    alignSelf:'flex-start',
    marginLeft:10
  },
  commentH1: {
    fontWeight:'bold'
  },
  commentp: {
    fontSize: 10,
    width:250
  }
});