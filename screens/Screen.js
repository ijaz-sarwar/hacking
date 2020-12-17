import React from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";



export default class Screen extends React.Component {
    static navigationOptions = {
        title: null,
        headerMode: 'none',
        headerShown: false,


    }

    render() {
        return (

            <View style={styles.screen}>
                <View style={styles.heading}>
                    <Text style={styles.headertext}>
                        Simulated Terminals
                     </Text>
                </View>

                <View style={styles.cardsview}>

                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('WindowsSystemHack')} style={styles.button}>
                            <Text style={styles.textincards}> HACK A WINDOWS SYSTEM</Text>
                        </TouchableOpacity>
                    </View>




                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MobilePhoneHack')} style={styles.button}>
                            <Text style={styles.textincards}>HACK A MOBILE PHONE </Text>
                        </TouchableOpacity>
                    </View>


                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('HackAnEmailAccount')} style={styles.button}>
                            <Text style={styles.textincards}>HACK AN EMAIL ACCOUNT</Text>
                        </TouchableOpacity>
                    </View>

                </View>


                <View style={styles.cardsview}>

                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('HackAWebsite')} style={styles.button}>
                            <Text style={styles.textincards}> HACK A WEBSITE</Text>
                        </TouchableOpacity>
                    </View>




                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('HackAServer')} style={styles.button}>
                            <Text style={styles.textincards}> HACK A SERVER </Text>
                        </TouchableOpacity>
                    </View>


                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('HackACompany')} style={styles.button}>
                            <Text style={styles.textincards}> HACK A COMPANY </Text>
                        </TouchableOpacity>
                    </View>

                </View>




            </View>



        )

    }





}


const styles = StyleSheet.create({


    screen: {

        flex: 1,
        fontSize: 14,
        backgroundColor: 'black',
        padding: 2,
        borderColor: 'green',
        borderWidth: 4,



    },

    button: {

        height: 100,
        width: 110,
        backgroundColor: "green",
        borderColor: 'white',
        borderWidth: 3,
        padding: 2,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 9,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'






    },
    txxt: {
        color: '#228B22',
        fontFamily: 'UbuntuMono_B.tff',
        fontSize: 20,
        paddingTop: 2,
    },

    headertext: {
        color: "green",
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 23,
        fontWeight: 'bold',
        fontFamily: 'UbuntuMono_B.tff',

    },
    heading: {
        marginLeft: 70,
        marginRight: 70,
        marginTop: 20,
        fontFamily: 'UbuntuMono_B.tff',
        paddingEnd: 2,

    },

    cardsview: {
        flexDirection: 'row',
        marginTop: 20,
        alignSelf: 'center'

    },
    textincards: {
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontFamily: 'UbuntuMono_B.tff',
    }






})