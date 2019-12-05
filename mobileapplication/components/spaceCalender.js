import React, {Component, useState, useEffect} from 'react'
import { Text, View, StyleSheet, SafeAreaView, Dimensions, Image, Button, TouchableHighlight } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { ScrollView } from 'react-native-gesture-handler';

export default class SpaceCalender extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }  
    onDateChange(date) {
        this.setState({
          selectedStartDate: date,
        });
      }
    render(){
        const {navigate} = this.props.navigation;
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.container}>
                    
                    <Image style={styles.header_image} source={require('../assets/cubical.jpg')}/>

                    {/* Add Calander here*/}
                    <View style={styles.calendar}>
                        <CalendarPicker onDateChange={this.onDateChange}/>
                    </View>
                    
                    <TouchableHighlight onPress={() => navigate('LandingPage')}>
                        <View style={styles.add_cart}>
                            <Text style={styles.add_cart_text}>
                                Add to cart
                            </Text>
                        </View>
                    </TouchableHighlight>
                
                </ScrollView>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        display:"flex",
        backgroundColor: '#fff',
        flexDirection: "column",
        height : "100%"
      },
    all_text: {
        marginTop: -50,
        fontSize: 18,
    },
    description_view: {
    },
    paragraph: {
        marginLeft: 20,
        marginRight: 20
    },
    header_image: {
        height: 256,
        width: "100%"
    },
    rating_stars: {
        width: "100%",
        display : "flex", 
        flexDirection : "row", 
        flexGrow: 1, 
        justifyContent: "center",
    },
    star: {
        width: 32,
        height: 32,
        margin: 8
    },
    calendar: {
        backgroundColor: '#FFFFFF',
        margin: 8
    },
    add_cart: {
        height: 75,
        marginTop: -30,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    },
    add_cart_text: {
        color: "white",
        fontSize: 20
    }
  });
  
