import React from 'react';
import { Text,StyleSheet, View } from 'react-native';





export default function Header() {
    return(
        <View style={styles.screen}>
            <Text style={styles.headertext}>
                   

               terminal@user

            </Text>
        </View>
    )
};


const styles =  StyleSheet.create({

    screen:{
      
        backgroundColor:'black',
        paddingLeft: 95,
        paddingRight:50,
        paddingTop:20,
        paddingBottom:30,



        

        

    },

    headertext:{
        color:"green",
        alignItems:'center',
        justifyContent:'center',
        fontSize:30,
        fontWeight:'bold',
        

        


    }
    
    
})