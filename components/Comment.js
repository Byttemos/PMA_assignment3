import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import styles from '../StyleSheet'
//this component seems to work as intended, apart from the delete-button
export default function Comment(props) {
    return (
        <View style={{flexDirection: "row", padding: 30}}>
            <View style = {styles.comment}>
                <Text>{props.comment_id}</Text>
                <Text>{props.comment_author}</Text>
                <Text>{props.comment_content}</Text>
            </View>
            <Button style={{marginRight: 10}}
                title = "remove"
                onPress={() => console.log("delete comment")}/>
            
            
        </View>
    )
    
}
