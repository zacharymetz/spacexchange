import React, {Component, useState, useEffect} from 'react'
import { Text, View, StyleSheet, Dimensions, Image, Button, TouchableHighlight } from 'react-native';
import Calendar from 'react-calendar/dist/entry.nostyle';

export default class SpaceCalender extends Component {
    state = {
        date: new Date(),
      }
     
    onChange = date => this.setState({ date })

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.full_screen}>
                <Image style={styles.header_image} source={require('../assets/cubical.jpg')}/>
                <View style={styles.description_view}>
                    <Text style={styles.all_text}>
                        Description:
                    </Text>
                    <Text style={styles.paragraph}>
                        This cubical is a very nice cubical.
                    </Text>
                </View>
                <View style={styles.review_view}>
                    <Text style={styles.all_text}>
                        Reviews:
                    </Text>
                    <Text style={styles.paragraph}>
                    It’s difficult to beat the convenience of viewing a company’s location, 
                    hours, phone number, and reviews all in one place. That’s likely why Google
                     reviews are one of the most popular and reliable forms of customer feedback.
                      So how do you leave a Google review?When you want to find ice cream near you, 
                      where do you search? On Google. When you find that ice cream shop, what do 
                      you look at next? How many stars they have, what customers are saying about 
                      their experience there, and if they have positive reviews. If they have bad 
                      reviews you’re likely to move on and try to find something better. 
                      That’s the power of Google reviews.
                    </Text>
                </View>
                <View style={styles.rating_stars}>
                    <Image style={styles.star} source={require('../assets/starempty.png')}/>
                    <Image style={styles.star} source={require('../assets/starempty.png')}/>
                    <Image style={styles.star} source={require('../assets/starempty.png')}/>
                    <Image style={styles.star} source={require('../assets/starempty.png')}/>
                    <Image style={styles.star} source={require('../assets/star.png')} />
                </View>
                
                <View style={styles.white_space} />
                <TouchableHighlight onPress={() => navigate('LandingPage')}>
                    <View style={styles.add_cart}>
                        <Text style={styles.add_cart_text}>
                            Add to cart
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
    all_text: {
        fontSize: 18,
        marginTop:5,
        marginLeft: 3
    },
    description_view: {
        marginTop: 0
    },
    review_view: {
        marginTop: 20
    },
    paragraph: {
        marginLeft: 20,
        marginRight: 20
    },
    header_image: {
        height: "30%",
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
    white_space: {
        flexGrow: 1
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
  
