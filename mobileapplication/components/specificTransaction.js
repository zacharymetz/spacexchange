import React, {Component} from 'react'
import { View, StyleSheet, Text, TouchableHighlight, Dimensions, Image} from 'react-native';

export default class SpecificTransaction extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.full_screen}>
                <View style={styles.header}>
                    <Text style={fontSize= 14}>
                        Receipt: Cauliflower Tower
                    </Text>
                </View>

                {/* Receipt */}
                <View style={styles.receipt}>
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
                            <Text>$60 X 3</Text>
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
                            <Text>tax (10%): </Text>
                            <View style={{width : 60,display: "flex",flexDirection:"row",justifyContent:"flex-end"}}>
                                <Text> 20$</Text>
                            </View>    
                        </View>
                        <View style={styles.total_list_item}>
                            <Text>Subtotal:</Text>
                            <View style={{width : 60,display: "flex",flexDirection:"row",justifyContent:"flex-end"}}>
                                <Text>220$</Text>
                            </View>
                            </View>
                        </View>
                        {/* Rating */}
                        <View style={styles.rating}>
                            <TouchableHighlight onPress={() => navigate('LandingPage')}>
                                <View style={styles.dislike_button}>
                                    <Image style={styles.dislike_image} source={require('../assets/icons/dislike-thumb.png')} />
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => navigate('LandingPage')}>
                                <View style={styles.like_button}>
                                    <Image style={styles.like_image} source={require('../assets/icons/like.png')} />
                                </View>
                            </TouchableHighlight>
                        </View>
                        <Text style={styles.rating_text}>Rate this Landlord</Text>
                    </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        borderBottomWidth: 2,
        padding: 10,
        borderBottomColor: "black"
    },
    full_screen: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height : Dimensions.get('window').height,
        width : Dimensions.get('window').width
    },
    receipt: {
        display: "flex",
        position: "absolute",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height : Dimensions.get('window').height,
        width : Dimensions.get('window').width
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
    total_list_item: {
        display : "flex",
        flexDirection:"row",
        justifyContent: "flex-end"
    },
    white_space: {
        flexGrow: 1
    },
    list: {
        display : "flex",
        flexDirection : "column",
        width : Dimensions.get('window').width,
        borderTopWidth : 2,
        borderTopColor : "black"
    },
    listItem: {
        borderBottomWidth : 2,
        borderBottomColor : "black",
        display : "flex",
        flexDirection : "row",
        padding: 5
    },
    listPrice: {
        padding: 7
    },
    rating: {
        height: 100,
        width: 180,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    dislike_button: {
        height: 80,
        width: 80,
        padding: 16,
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        borderRadius: 100/2,
        borderWidth: 4,
        borderColor: "black"
    },
    like_button: {
        height: 80,
        width: 80,
        padding: 16,
        margin: 15,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        borderRadius: 100/2,
        borderWidth: 4,
        borderColor: "black"
    },
    dislike_image: {
        height: 60,
        width: 60,
    },
    like_image: {
        height: 60,
        width: 60,
    },
    confirm_text: {
        color: "white",
        fontSize: 20
    },
    rating_text: {
        margin: 20,
        fontSize: 20
    }
});
  