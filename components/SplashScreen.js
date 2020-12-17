import React from 'react'
import { View, Image, Text } from 'react-native'


class SplashScreen extends React.Component {
    static navigationOptions = {
        title: null,
        headerMode: 'none',
        headerShown: false,

    }




    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Screen')
        }, 2500)
    }


    render() {
        return (
            <View style={{ flex: 1, flexWrap: 'wrap' }}>
                <Image
                    style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}
                    source={require('../assets /logo.png')}
                />
            </View>
        );
    }
}

export default SplashScreen
