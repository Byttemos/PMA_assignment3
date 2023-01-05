import { View, Text, Pressable, TextInput, FlatList, Button, ScrollView } from 'react-native'
import styles from "../StyleSheet";
import Comment from "../components/Comment";
import React, {useState} from "react";

export default function CommentScreen ({navigation}) {
    const [comment_string, setCommentString] = useState("røv");
    const [getComments, setComments] = useState(comments);

    var comments = [

        {
          comment_id: "44",
          comment_author: "Anonymous",
          comment_content: "test comment"
      }
    ]

    function new_comment_id() {
        return(
            Math.floor(Math.random() * 1000000) + 1
        );
    }
    
    const addComment = (content) => {
        if (content != "røv") {
            setComments(
                [...getComments,
                {
                    comment_id: new_comment_id(),
                    comment_author: "@hriskaer",
                    comment_content: content
                }
                ]
            );
        }
        setCommentString("røv");
    }

    function make_comment(comment_data) {
        return (
            <Comment>
                comment_id={comment_data.comment_id}
                comment_author={comment_data.comment_author}
                comment_content={comment_data.comment_content}
            </Comment>
        );

    }

    return (
        <View style={{justifyContent: "center"}}>
        <View>   
            <ScrollView style={{height: 300}}>   
              <Comment
                    comment_id = {new_comment_id()}
                    comment_author = "din moder"
                    comment_content = "Din fader"
                >
                </Comment>

               

            </ScrollView>
        </View> 
        <View style={styles.inputField}>
                    <TextInput
                        style={{backgroundColor: "lightgrey", height:40}}
                        onChangeText={setCommentString}
                        placeholder=" Add comment "
                        value={comment_string}
                    />

                    <Button
                        style={{ flex: 1 }}
                        onPress={() => addComment(comment_string)}
                        //onPress={() => console.log("test")}

                        title="Post Comment"
                        color="lightblue"
                    />
                </View>

        </View>

    );

}