import React from 'react';
import { View ,Text,StyleSheet} from 'react-native';
import { BannerAd, BannerAdSize} from '@react-native-firebase/admob';
const adUnitId = "ca-app-pub-6688047856305668/7426100316";

export default class Admob extends  React.Component{

  static navigationOptions = {
    title: null,
    headerMode: 'none',
    headerShown :false,

}

render(){




return(
<View>
<View  
   style={styles.screen}
   >

<Text style={styles.headertext}>
 Click on the add so I can get money and buy some bread  :)
</Text>

<BannerAd style={styles.banneradd}
 unitId={adUnitId}
 size={BannerAdSize.MEDIUM_RECTANGLE}
 requestOptions={{
 requestNonPersonalizedAdsOnly: true,}}
 onAdLoaded={() => {
 console.log('Advert loaded');}}
 onAdFailedToLoad={(error) => {
 console.error('Advert failed to load: ', error);}}
/>

<Text style={styles.headertext}>
 thanks if you did ;)

</Text>
</View>
</View>

)}}


const styles = StyleSheet.create({

screen:{
  flex:1,
  padding:10,
  paddingRight:60, 
  paddingLeft:60, 


},
headertext:{
  fontSize:30,
  fontWeight:"bold",
},
banneradd:{
  paddingLeft:60,
  paddingRight:20,
  marginLeft:60,
resizeMode:'contain',


}

})