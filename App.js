import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React, {useState} from "react";

// Import components
import HomeScreen from "./screens/HomeScreen";
import PostScreen from "./screens/PostsScreen";
import CommentScreen from "./screens/CommentScreen";
import { CommentContext } from "./appContext";

// Navigation specifics, you probably don't need to change these
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();



export default function App() {

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

  const [getComments, setComments] = useState((comment_array));

  return (
    <CommentContext.Provider value={[getComments, setComments]}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home page" }}
          />
          <Stack.Screen
            name="Posts"
            component={PostScreen}
            options={{ title: "Posts page", props: comment_array }}
          />

          <Stack.Screen 
            name="Comments"
            component={CommentScreen}
            options={{ title: "Comment section"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CommentContext.Provider>
   
  );

  
}
