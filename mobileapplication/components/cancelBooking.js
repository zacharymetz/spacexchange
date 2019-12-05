import React, {Component} from 'react'
import { View, StyleSheet, Text, TouchableHighlight, Dimensions} from 'react-native';


export default class ConfirmCart extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View styles={styles.container}>
                <View styles={styles.top}>
                    <TouchableHighlight style={styles.backButton} onPress={() => navigate('LandingPage')}>
                        <Text style={{color:"white"}}>
                            Back
                        </Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <Text style={styles.cancelContainer}>Successfully Cancelled</Text>

                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        marginTop: "100%",
        marginHorizontal: 15
    },
    backButton: {
        backgroundColor: "#3e3e3e",
        padding: 15,
        fontSize: 20,
        borderRadius: 5,
        marginTop: 75,
        marginBottom: 0,
        marginLeft: 15,
        marginRight: "auto"
       
    },
    cancelContainer:{
        height:500,
        lineHeight: 500,
        textAlign: "center",
        fontSize: 35
        
    }
})