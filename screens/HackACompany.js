import React,{useState, Component,useEffect} from 'react';
import { Text, View,StyleSheet,TextInput, TouchableNativeFeedbackBase,ScrollView,Button} from 'react-native'; 
import Header from '../components/Header';
import HackACompany_Button from '../components/HackACompany_Button';

export default class HackACompany extends  React.Component{
    

  
  static navigationOptions = {
    title: null,
    headerMode: 'none',
    headerShown :false,

}
 


constructor(props){
  super(props);
  this.state={
    input_terminal:'',
    output_terminal:'',
    random_state:'',  
    components : [
      this.getLineView()
    ],
  }
}



addAnotherLine = (text) => {
  console.log(typeof text)
  let newDir = '';
  let children=null;
  //split method
  console.log({text})
  if(text) {
       if(text.includes('sudo apt-get update')) {
      children = <Text style={styles.txxt}>
Hit:1 http://dl.google.com/linux/chrome/deb stable InRelease {"\n"}   
Hit:2 http://archive.canonical.com eoan InRelease {"\n"}                  
Hit:3 https://dl.yarnpkg.com/debian stable InRelease {"\n"}                  
Hit:4 http://us.archive.ubuntu.com/ubuntu eoan InRelease {"\n"}              
Hit:5 http://us.archive.ubuntu.com/ubuntu eoan-updates InRelease{"\n"}        
Hit:6 http://us.archive.ubuntu.com/ubuntu eoan-backports InRelease{"\n"}  
Hit:7 http://us.archive.ubuntu.com/ubuntu eoan-security InRelease{"\n"}  
Hit:8 https://deb.nodesource.com/node_13.x eoan InRelease{"\n"}  
Reading package lists... Done{"\n"}  
       </Text>
     this.adds_show()
        }

else if(text.includes('sudo apt-get upgrade')) {
children = <Text style={styles.txxt}>
Reading package lists... Done  {"\n"}    
Building dependency tree       {"\n"}    
Reading state information... Done{"\n"}    
Calculating upgrade... Done{"\n"}    
The following packages were automatically installed and are no longer required:{"\n"}    
  gir1.2-geocodeglib-1.0 gir1.2-gst-plugins-base-1.0 gir1.2-gudev-1.0{"\n"}    
  gir1.2-udisks-2.0 grilo-plugins-0.3-base gstreamer1.0-gtk3 guile-2.2-libs{"\n"}    
  libatk-wrapper-java libatk-wrapper-java-jni libc-ares2 libcdr-0.1-1{"\n"}    
 
  node-which-module node-wide-align node-widest-line node-wrap-ansi{"\n"}    
  node-wrappy node-write-file-atomic node-xdg-basedir node-xtend node-y18n{"\n"}    

  x11proto-dev xorg-sgml-doctools xtrans-dev{"\n"}    
Use 'sudo apt autoremove' to remove them.{"\n"}    
The following packages will be upgraded:{"\n"}    
  libldap-2.4-2 libldap-common{"\n"}    
2 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.{"\n"}    
Need to get 173 kB of archives.
After this operation, 0 B of additional disk space will be used.{"\n"}    

Get:1 http://us.archive.ubuntu.com/ubuntu eoan-updates/main amd64 libldap-common all 2.4.48+dfsg-1ubuntu1.2 [17.5 kB]{"\n"}    
Get:2 http://us.archive.ubuntu.com/ubuntu eoan-updates/main amd64 libldap-2.4-2 amd64 2.4.48+dfsg-1ubuntu1.2 [155 kB]{"\n"}    
Fetched 173 kB in 2s (77.3 kB/s)        {"\n"}    
(Reading database ... 228911 files and directories currently installed.){"\n"}    
Preparing to unpack .../libldap-common_2.4.48+dfsg-1ubuntu1.2_all.deb ...{"\n"}    
Unpacking libldap-common (2.4.48+dfsg-1ubuntu1.2) over (2.4.48+dfsg-1ubuntu1.1) ...{"\n"}    
Preparing to unpack .../libldap-2.4-2_2.4.48+dfsg-1ubuntu1.2_amd64.deb ...{"\n"}  
Unpacking libldap-2.4-2:amd64 (2.4.48+dfsg-1ubuntu1.2) over (2.4.48+dfsg-1ubuntu1.1) ...{"\n"}  
Setting up libldap-common (2.4.48+dfsg-1ubuntu1.2) ...{"\n"}  
Setting up libldap-2.4-2:amd64 (2.4.48+dfsg-1ubuntu1.2) ...{"\n"}  
Processing triggers for libc-bin (2.30-0ubuntu2.2) ...{"\n"}  
Processing triggers for man-db (2.8.7-3) ...{"\n"}  
</Text>
          }
          else if(text.includes("connect companyA.server")) {
            children = <Text style={styles.txxt}>
            connecting the server{"\n"}  
            resolving dependecies ...  {"\n"}  
            making a request... {"\n"}  
            getting  the scripts ... {"\n"}  
             no pings detected {"\n"}  
              connection is stabled {"\n"}  

              </Text>
              }


              else if(text.includes("search for doors,exploits,backdoors")) {
                children = <Text style={styles.txxt}>
                   checking exploits  {"\n"}  
                   the server doors arent corrupted {"\n"}  
                   making a dns search attack on server  {"\n"}  
                   found a corupted door in the server  {"\n"}  
                   noted the in the to corrupt the door  {"\n"}  
                  the suitable malware would be mfs_trk  {"\n"}  
                   connecting to the  companies's server {"\n"}  
                   finding backdoors {"\n"}  
                   getting all data from recipets{"\n"}   
                   getting all info {"\n"}  
                recognized a mfs malware oppurtunity {"\n"}  
                  </Text>
                  }       
                  
                  else if(text.includes("sudo apt-get mfsmalware")) {
                    children = <Text style={styles.txxt}>
                     getting the script  {'\n'}
                 downloading from the server  {'\n'}
                 might take a while , please wait ! {'\n'} 
                 got  the scritps !!{"\n"}
                running in the virtual enviornment {"\n"}
                 scripts are safe to run  {"\n"}
                 running it on the system {"\n"}
                 DONE !!!   {'\n'}
                   
                    </Text>
                      }       

                      else if(text.includes("deploy_patch")) {
                        children = <Text style={styles.txxt}>
                        patch being deployed ....  {"\n"}
                        running  straight ...  {"\n"}
                        no network error detected ... {"\n"} 
                        task succesfully completed ..  {"\n"}
                     type in the server address ..  {"\n"}
                        </Text>
                          }       
                          
                          else if(text.includes("16.89.0912.3")) {
                            children = <Text style={styles.txxt}>
                             scripts being run... {"\n"}
                              installing scripts...  {"\n"}
                              overiding the system.... {"\n"}
                              system got ovveride ... {"\n"}
                             deleting a backup... {"\n"}
                             BROS WE ARE DOING IT ... {"\n"}
                             WE ARE IN THE COMPANY SERVER .. {"\n"} 
                             TASK COMPLETED SUCCESFULLY  {"\n"}
                             COMPANY SERVER OVERIDED  {"\n"}
                             {"\n"}
                             WE DID IT {"\n"} 
                             A DIGITAL  BRO FIST FROM ME . :) {"\n"}
                           
                             {"\n"}
                            </Text>

                              }       
    






                    
                                  
         else {children = <Text style={styles.txxt}>
             
             
             
             invalid command click the button below  to type the right command 
             task succesfully failed </Text>}
      }

  this.setState(prevState => ({
    components : [...prevState.components, this.getLineView(newDir, children)]
  }))
}

getLineView = (lineText='', children=null) => {
  return (
    
    <View>
  <View>{children}</View>    
  <View style={styles.txtinline}>
    <Text style={styles.txxt}>
      terminal@user~$:{lineText}
    </Text>
    <TextInput 
    style={styles.txtinput}
    placeholder = "start from here "
    placeholderTextColor = "green"
    onSubmitEditing={(event) => {
      this.addAnotherLine(event.nativeEvent.text)
    }}
    > 
    </TextInput>
    </View></View>
  
    )
}

render(){
  const { components } = this.state;
  return (
   <View  style={styles.screen} >
    <ScrollView >
          <View >
        <Header/>
        
           {components.map((component) => component)}

        
          </View>
              </ScrollView>
              <View style= {styles.buttonl}>
           <HackACompany_Button/>
         </View>
             </View>
              

  );
} }


const styles = StyleSheet.create({
  screen:{
   flex:1,
   fontSize:14,
   backgroundColor:'black',
   padding:2,
   borderColor:'green',
   borderWidth: 4,
   
   
   


},
   txxt:{
    color:'#228B22',
    fontFamily:'UbuntuMono_B.tff',
    fontSize: 20, 
    paddingTop:2,
    fontWeight:'bold',
    paddingLeft:7,
  flexShrink:1


   },
 txtinput:{   
     color:'green',
     fontSize:20,
     fontFamily:'UbuntuMono_B.tff',
     borderWidth:1,
     maxHeight:40,
     paddingTop:0,
     fontWeight:'bold',
     flex:1,
   },

txtinline:{
  flexDirection:'row',
  alignItems:'stretch',

}

})
