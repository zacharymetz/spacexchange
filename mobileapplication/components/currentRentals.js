import React, {Component, useState, useEffect} from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Dimensions, Image } from 'react-native';

export default class CurrentRentals extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.full_screen}>
                <Text style={styles.todaysRentalText}>Today's Rental</Text>
                <View style={styles.list}>
                    <View style={styles.listItem}>
                            <Image source={require('../assets/locations/telus_sky/TelusSky.jpg')} style={styles.listImage} resizeMode="cover"/>
                            <View style={styles.listText}>
                                <Text style={styles.listItemTitle}>Telus Sky</Text>
                                <Text style={styles.dateText}>December 22, 2019</Text>
                            </View>
                            <View style={styles.white_space} />
                            <TouchableHighlight onPress={() => navigate('LandingPage')}>
                                <View style={styles.letMeIn}>
                                    <Text style={styles.letMeInText}>HERE</Text>
                                </View>
                            </TouchableHighlight>
                    </View>
                    </View>
                <Text style={styles.upcomingRentalText}>Upcoming Rentals</Text>
                <View style={styles.list}>
                    <View style={styles.listItem}>
                            <Image source={require('../assets/locations/rbc/rbc_outside.jpeg')} style={styles.listImage} resizeMode="cover"/>
                            <View style={styles.listText}>
                                <Text style={styles.listItemTitle}>RBC Place</Text>
                                <Text style={styles.dateText}>December 29, 2019</Text>
                            </View>
                    </View>
                    <View style={styles.listItem}>
                            <Image source={require('../assets/locations/9th_avenue/9th_place_outside.jpeg')} style={styles.listImage} resizeMode="cover"/>
                            <View style={styles.listText}>
                                <Text style={styles.listItemTitle}>9th Avenue Place</Text>
                                <Text style={styles.dateText}>January 2, 2020</Text>
                            </View>
                    </View>
                </View>
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
    todaysRentalText: {
        marginTop: 70,
        marginLeft: 40,
        fontSize: 24,
        textDecorationLine: "underline"
    },
    upcomingRentalText: {
        marginLeft: 40,
        fontSize: 24,
        textDecorationLine: "underline"
    },
    list: {
        display : "flex",
        flexDirection : "column",
        width : Dimensions.get('window').width,
        marginTop: 20,
        marginBottom: 20,
    },
    listItem: {
        borderWidth : 2,
        borderColor : "black",
        display : "flex",
        flexDirection : "row",
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
    },
    listImage:{
        height : 96,
        width : 96,
      },
      listItemContent:{
        height : 96,
        display : "flex",
        flexGrow : 1,
        padding: 8,
        alignItems : "flex-start",
        justifyContent : "flex-start", 
        flexDirection : "row",
        borderLeftWidth : 2,
        borderLeftColor : "black"
      },
      listText: {
        display: "flex",
        flexDirection: "column"
      },
      listItemTitle : {
          fontSize : 22,
          fontWeight : "600",
          paddingTop: 5,
          paddingLeft: 6,
      },
      listItemSubText : {
            textAlign : "right",
      },
      letMeIn: {
          margin: 0,
          padding: 0,
          height: 96,
          width: 55,
          backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center"
      },
      letMeInText: {
        transform: [{rotate: '-90deg'}],
        color: "white",
        fontSize: 17,
        fontWeight: "bold"
    },
    white_space: {
        flexGrow: 1
    },
    dateText: {
        fontSize: 15,
        marginTop: 5,
        paddingLeft: 6,
    }
});
  
// transform: [{rotate: '90deg'}]