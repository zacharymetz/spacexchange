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
                        <View style={styles.description_view}>
                            <Text style={styles.all_text}>
                                Description:
                            </Text>
                            <Text style={styles.paragraph}>
                                This cubical is a very nice cubical.
                            </Text>
                    </View>

                    {/* Add Calander here*/}
                    <View style={styles.calendar}>
                        <CalendarPicker
                        onDateChange={this.onDateChange}
                        />
                    </View>
                    <View>
                        <View>
                            <Text style={styles.all_text}>
                                Reviews:
                            </Text>
                            <Text style={styles.paragraph}>
                            It’s difficult to beat the convenience of viewing a company’s location, 
                            hours, phone number, and reviews all in one place. That’s likely why Google
                            reviews are one of the most popular and reliable forms of customer feedback.
                            </Text>
                        </View>
                        <View style={styles.rating_stars}>
                            <Image style={styles.star} source={require('../assets/starempty.png')}/>
                            <Image style={styles.star} source={require('../assets/starempty.png')}/>
                            <Image style={styles.star} source={require('../assets/starempty.png')}/>
                            <Image style={styles.star} source={require('../assets/starempty.png')}/>
                            <Image style={styles.star} source={require('../assets/star.png')} />
                        </View>
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
        margin: 20,
        padding: 16,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    },
    add_cart_text: {
        color: "white",
        fontSize: 20
    }
  });
  
