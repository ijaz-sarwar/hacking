import React, { Component } from 'react';
 
import { Platform, StyleSheet, View, Text, Modal, Button, TouchableOpacity, Alert } from 'react-native';
 
export default class MobilePhoneHack_Button extends Component {
 
  constructor(props) {
 
    super(props);
 
    this.state = { 
        
        Alert_Visibility: false 
    };
 
  }
 
  Show_Custom_Alert(visible) {
 
    this.setState({Alert_Visibility: visible});
    
  }

  ok_Button=()=>{

    Alert.alert("OK Button Clicked.");

  }
 
 render() {
     
   return (
 
      <View style={styles.MainContainer}>
 
        <Modal
 
          visible={this.state.Alert_Visibility}

          transparent={false}
 
          animationType={"fade"}
          onRequestClose={ () => { this.Show_Custom_Alert(!this.state.Alert_Visibility)} } 
          
         style = {styles.buttoni}
          
          >
 
 
            <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' ,color:"green"}}>
 
 
                <View style={styles.Alert_Main_View}>
 
 
                    <Text style={styles.Alert_Title}> type these commands in oder brooos </Text>


                    <View style={{ width: '100%', height:3, backgroundColor: 'green'}} />


                    <Text style={styles.Alert_Message}>
                      
                      1): sudo apt-get update {'\n'}
                      2): sudo apt-get upgrade  {'\n'}
                      3): sudo apt-get install selenium   {'\n'}
                      4): cd selenium {'\n'}
                      5): www.itsyobro.com {'\n'}
                    
                      
                   </Text>


                    <View style={{ width: '100%', height: 3, backgroundColor: 'green'}} />


                    <View style={{flexDirection: 'row', height: '10%'}}>

                        <TouchableOpacity 
                            style={styles.buttonStyle}
                            onPress={() => { this.Show_Custom_Alert(!this.state.Alert_Visibility)} }  
                              activeOpacity={0.7} 
                             >
    
                            <Text style={styles.TextStyle}> OK </Text>
                
                        </TouchableOpacity>

                        <View style={{ width: 1, height: '20%', backgroundColor: '#fff'}} />

                        <TouchableOpacity 
                            style={styles.buttonStyle} 
                            onPress={() => { this.Show_Custom_Alert(!this.state.Alert_Visibility)} } 
                            activeOpacity={0.7} 
                            >
    
                            <Text style={styles.TextStyle}> CANCEL </Text>
                
                        </TouchableOpacity>

                    </View>
                  
                </View>
 
            </View>
 
 
        </Modal>
 
        <Button 
  color="green"
  onPress={() => { this.Show_Custom_Alert(true) }} title="click to help" />
         
 
      </View>
 
           
   );
 }
}
 
const styles = StyleSheet.create({
 
/*MainContainer :{
    
 //flex:1,
 //justifyContent: 'center',
 //alignItems: 'center',
 
},*/

 /*buttoni:{
color:"green",


},*/
 
Alert_Main_View:{

color:"green",
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor : "black", 
  height: 400,
  width: 300,
  borderWidth: 1,
  borderColor: 'black',
  borderRadius:7,
 
},
 
Alert_Title:{
 
  fontSize: 25, 
  color: "green",
  textAlign: 'center',
  padding: 10,
  height: '20%'
 
},

Alert_Message:{
 
    fontSize: 22, 
    color: "green",
    textAlign: 'center',
    padding: 10,
    height: '70%'
   
  },

buttonStyle: {
    
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color:"green",
},
   
TextStyle:{
    color:'green',
    textAlign:'center',
    fontSize: 22,
    marginTop: -5
}
 
});
