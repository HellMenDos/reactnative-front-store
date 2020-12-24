import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { Button,Input,Image,Icon,Badge } from 'react-native-elements';

import { TouchableHighlight } from 'react-native';


export default function CommentComponent(props) {
  return (
  	<TouchableHighlight>
      <View  style={styles.CommentInner}>
            <Image source={require('../images/ps5.jpg')} style={styles.imageComment} />
            <View style={styles.infoCommentSection}>
              <Text style={styles.commentH1}>{props.title}</Text>
              <Text style={styles.commentp}>{props.describe}</Text>
              <Text style={styles.commentp}>Raiting: {props.raiting}</Text>
            </View>
      </View>
	</TouchableHighlight>
  );
}


const styles = StyleSheet.create({
  imageComment: {
    width: 60, 
  height: 60,
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
    fontSize: 10
  }
});