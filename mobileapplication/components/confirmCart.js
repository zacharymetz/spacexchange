import React, {Component} from 'react'
import { View, StyleSheet, Text, TouchableHighlight, Dimensions} from 'react-native';


export default class ConfirmCart extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.full_screen}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={fontSize= 14}>
                        Summary
                    </Text>
                </View>
                {/* Item checkout list */}
                <View style={styles.checkout_list}>  
                    <View style={styles.checkout_list_item}>
                        <Text>Cubical</Text>
                        <View style={styles.white_space}/>
                        <Text>$30 X 10</Text>
                        <View style={{width : 60,display: "flex",flexDirection:"row",justifyContent:"flex-end"}}>
                        <Text>
                        30$
                        </Text>
                        </View >
                    </View>
                    <View style={styles.checkout_list_item}>
                        <Text>Office</Text>
                        <View style={styles.white_space}/>
                        <Text>$60 X 2</Text>
                        <View style={{width : 60,display: "flex",flexDirection:"row",justifyContent:"flex-end"}}>
                        <Text>
                        120$
                        </Text>
                        </View >
                    </View>
                    <View style={styles.checkout_list_item}>
                        <Text>Board Room</Text>
                        <View style={styles.white_space}/>
                        <Text>$150 X 1</Text>
                        <View style={{width : 60,display: "flex",flexDirection:"row",justifyContent:"flex-end"}}>
                        <Text>
                        150$
                        </Text>
                        </View >
                    </View>
                </View>

                {/* Total amount */}
                <View style={styles.total_list}> 
                    
                    <View style={styles.total_list_item}>
                        <Text>
                            Subtotal: 
                        </Text>
                        <View style={{width : 60,display: "flex",flexDirection:"row",justifyContent:"flex-end"}}>
                        <Text>
                        200$
                        </Text>
                        </View>
                        
                    </View>
                    <View style={styles.total_list_item}>
                        <Text>
                            tax (10%): 
                        </Text>
                        <View style={{width : 60,display: "flex",flexDirection:"row",justifyContent:"flex-end"}}>
                        <Text>
                        20$
                        </Text>
                        </View>
                        
                        
                    </View>
                    <View style={styles.total_list_item}>
                        <Text>
                            Subtotal:
                        </Text>
                        <View style={{width : 60,display: "flex",flexDirection:"row",justifyContent:"flex-end"}}>
                        <Text>
                        220$
                        </Text>
                        </View>
                        
                        
                    </View>
                </View>
                <View>
                    <Text style={{textAlign:"center", fontSize: 25}}>
                        Using card with last four: 5555
                    </Text>
                </View>
                
                {/* White space to fill in middle gap */}
                <View style={styles.white_space} />

                {/* Confirm button at the bottom */}
                <TouchableHighlight onPress={() => navigate('LandingPage')}>
                    <View style={styles.confirm_cart}>
                        <Text style={styles.confirm_text}>
                            Confirm $220.00
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    full_screen: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100%"
    },
    header: {
        height: 80,
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        borderBottomWidth: 2,
        padding: 10,
        borderBottomColor: "black"
    },
    checkout_list: {
        display : "flex",
        flexDirection : "column",
        width : Dimensions.get('window').width- 32,
        padding:8,
        margin:16,
        borderTopWidth : 2,
        borderTopColor : "black"
    },
    checkout_list_item: {
        display : "flex",
        flexDirection : "row",
        padding: 5
    },
    total_list: {
        display : "flex",
        flexDirection : "column",
        width : Dimensions.get('window').width - 32,
        padding:8,
        margin:16,
        borderBottomColor : "black",
        borderBottomWidth : 1
    },
    total_list_item: {
        display : "flex",
        flexDirection:"row",
        justifyContent: "flex-end"
    },
    white_space: {
        flexGrow: 1
    },
    confirm_cart: {
        height: 75,
        padding: 16,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    },
    confirm_text: {
        color: "white",
        fontSize: 20
    }
});
  