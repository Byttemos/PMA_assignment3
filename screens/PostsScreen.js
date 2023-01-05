import { View, Text, Image, Button, TouchableOpacity, TextInput } from 'react-native'
import styles from "../StyleSheet";
import Comment from "../components/Comment";
import React, {useState} from "react";

var comment_array = [

    {
      comment_id: 44,
      comment_author: "Anonymous",
      comment_content: "test comment",
  },

  {
    comment_id: 45,
    comment_author: "Anonymous",
    comment_content: "another test comment",
}
]

export default function PostsScreen({ navigation }) {

    //initiate array to hold comments. One comment is hardcoded in here for testing purposes
    

    const [like_count, setCount] = useState(0);
    const [comment_string, set_comment_string] = useState("");
    const [get_comments, set_comments] = useState(comment_array);
    
    
    



    function new_comment_id() {
        return(
            Math.floor(Math.random() * 1000000) + 1
        );
    }


    const addComment = (message) => {
        if (message != "") {
            set_comments(
                [...get_comments,
                {
                    comment_id: new_comment_id(),
                    comment_author: "@hriskaer",
                    comment_content: message
                }
                ]
            );
        }
        set_comment_string("");
    }




    return (
        <View style={styles.base}>
            
            <View>
                <Text style={{ marginLeft: 42, marginTop: 40, fontSize: 24 }}>
                    Henrik Riskær
                </Text>
                <Image
                    style={styles.postImg}
                    source={require('../assets/postimage.jpg')}
                />

                <TouchableOpacity onPress={()=> setCount(like_count+1)}>
                    <View style={{flexDirection: 'row'}}>
                        <Image
                            style={styles.postButtons}
                            source={require('../assets/likebuttonpressed.jpeg')}
                        />       
                        <Text style={{borderColor: "black", paddingLeft: 10, paddingTop: 10}}>{like_count}</Text>
                    </View>
                    
                </TouchableOpacity>
            </View>

            <View style={styles.inputField}>
                    <TextInput
                        style={{backgroundColor: "lightgrey", height:40}}
                        onChangeText={set_comment_string}
                        placeholder=" Add comment "
                        value={comment_string}
                    />
            

            </View>
            
            <Button
                title= "add_stuff"
                onPress={() => addComment(comment_string)}
            />
            <Button
                title= "test"
                onPress={() => console.log(comment_array)}
            />
            
            
        </View>
        



    );
}

