import React,{useState, Component,} from 'react';
import { Text, View,StyleSheet,TextInput, TouchableNativeFeedbackBase,ScrollView,Button} from 'react-native'; 
import Header from '../components/Header';
import WindowsSystemHack_Button from '../components/WindowsSystemHack_Button';


 export default class WindowsSystemHack extends  React.Component{
    
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

  else if(text.includes("mcaffe.attack_deploy")) {
    children = <Text style={styles.txxt}>
      getting the packages... {"\n"}
      resolving dependecies ... {"\n"}
      making it run {"\n"}
      ready to direct the payload  with exe file {"\n"}
  to the host {"\n"}
  type in  the host address to attack the windows OS  {"\n"}
      </Text>
     this.adds_show()
     
      }
   else if(text.includes('sudo install mcaffe')) {
    children = <Text style={styles.txxt}>
     
     getting the script  {'\n'}
     downloading from the server  {'\n'}
     got the scritps !!{"\n"}
    runnning mcaffee....{"\n"}
      
      </Text>
      }
    else if(text.includes("mcaffe/attack_deploy")) {
        children = <Text style={styles.txxt}>
          getting the packages... {"\n"}
          resolving dependecies ... {"\n"}
          making it run {"\n"}
          ready to direct the payload  with exe file {"\n"}
      to the host {"\n"}
      type in  the host address to attack the windows OS  {"\n"}
          </Text>
          }

      else if(text.includes('192.168.8901.21')) {
        children = <Text style={styles.txxt}>
          attacking and infecting the network ... {"\n"}
          host recognized ... {"\n"}
          attacks recognized ... {"\n"}
          attacks deployed... {"\n"}
          a back_door in the network{"\n"} 
          is created succesfully...{"\n"}
          Attack Succesfully Deployed {"\n"}
          You have done it correctly {"\n"}

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
           <WindowsSystemHack_Button/>
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
   },

txtinline:{
  flexDirection:'row',
  alignItems:'stretch',

}

})
