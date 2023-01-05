import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import styles from "../StyleSheet";

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

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.base}>

            <View>

                <Image
                    style={styles.instaLogo}
                    source={require('../assets/instalogo.png')} />


            </View>

            <View style={styles.louserLogo}>
                <Pressable onPress={() => navigation.navigate("Posts", comment_array)}>
                    <Image
                        style={styles.userLogo}
                        source={require('../assets/userlogo.png')}
                    />
                </Pressable>
            </View>
        </View>




    );
}

