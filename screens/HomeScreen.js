import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import styles from "../StyleSheet";
import { useContext } from "react";
import { CommentContext } from "../appContext";



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

