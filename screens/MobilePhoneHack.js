import React,{useState, Component,} from 'react';
import { Text, View,StyleSheet,TextInput, TouchableNativeFeedbackBase,ScrollView,Button} from 'react-native'; 
import Header from '../components/Header';
import MobilePhoneHack_Button from '../components/MobilePhoneHack_Button';


 export default class MobilePhoneHack extends  React.Component{
    
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
    ]
  }
}


adds_show = () =>{
  this.props.navigation.navigate('Admob');

};


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
          else if(text.includes("ipconfig")) {
            children = <Text style={styles.txxt}>
             slash ips from dns servers.... {'\n'}
             getting to know all devices from the internet ... {'\n'}
             getting info/data  all stuff on the Internet ... {'\n'}
             got all  mac adresses on the internet ....{'\n'}
              </Text>
              }


              else if(text.includes("sudo make install mfsvenom")) {
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
                  this.adds_show()
                  }       
                  
                  else if(text.includes("load trojan.apk from msfvenom")) {
                    children = <Text style={styles.txxt}>
                   getting msfvenom ...{'\n'}
                   getting components ...{'\n'}
                   getting trojan.apk from msfvenom ...{'\n'}
                   got the scripts loaded !!!{'\n'}
                   got trojan creator running !!{'\n'}
                   ready to create your apk payload {'\n'}
                   </Text>
                      }       
                    
                 else if(text.includes("compile virus with trojan.apk")) {
                        children = <Text style={styles.txxt}>
                       compiling scripts with trojan apk.. {'\n'}
                       resolving dependecies ... {'\n'}
                       compilied the scripts ready to deploy :) {'\n'}
                       type in the mac address of the device   {'\n'}
                    </Text>
                          }
                    
                 else if(text.includes("19-bf-de-81")) {
                        children = <Text style={styles.txxt}>
                      launching the trojan on the device ... {'\n'}
                      deploying on the  device ... {'\n'}
                      spreading the scripts across the data...{'\n'}
                      uncompiling  the scripts .... {'\n'}
                      succesfully compromised the device {'\n'}
                      WE DID IT MAN :) !!!{'\n'}


                      </Text>
                          this.adds_show()

                          }       
         else {children = <Text style={styles.txxt}>invalid command click the button below  to type the right command </Text>}
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
           <MobilePhoneHack_Button/>
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
