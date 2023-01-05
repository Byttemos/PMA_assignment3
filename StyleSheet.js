import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    instaLogo: {

        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'stretch',
        width: 350,
        height: 100,
        marginLeft: 20,

    },

    userLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'stretch',
        width: 130,
        height: 50,
        marginLeft: 120,
        marginTop: 200,
        borderRadius: 20,


    },

    base: {

        //backgroundColor: 'black',

    },

    loginButton: {
        flex: 0,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        padding: 10,
        marginLeft: 100,
        marginRight: 100,
        borderRadius: 20,



    },

    postImg: {
        alignItems: 'center',
        justifyContent: 'center',
        resizemode: 'stretch',
        width: 300,
        height: 300,
        marginTop: 5,
        marginLeft: 42,

    },

    postButtons: {
        flexDirection: 'column',
        resizeMode: 'stretch',
        width: 20,
        height: 20,
        marginTop: 10,
        marginLeft: 50,
        marginBottom: 20,

    },

    comment: {
        height: 20,
        width: 80,
        marginTop: 10,
        marginBottom: 10,
        alignContent: 'center',


    },

    inputField: {
        

    },

});

export default styles;