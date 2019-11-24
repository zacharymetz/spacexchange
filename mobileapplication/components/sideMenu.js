import React, {Component,useState, useEffect} from 'react'
import { Animated,StyleSheet, Text, View, Dimensions, Image,TextInput, TouchableHighlight ,Platform} from 'react-native';


export default class SideNav extends Component {
    constructor (props){
        super(props)

        this.state = {
            isOpen : false
        };
    }

    toggle(){
        this.setState({
            isOpen : !this.state.setState
        });
    }

    render(){
        return(<Animated.View style={styles.container}>
            <View style={styles.cancelWrapper}>
            <TouchableHighlight onPress={()=>this.toggle}>
                <Image
                            style={styles.cancelImage}
                            source = {require('../assets/icons/cancel.png')}
                        />
                    </TouchableHighlight>
            </View>
            <View style={styles.navHeader}>
                <Image
                    style={styles.userimage}
                    source = {require('../assets/icons/user.png')}
                />
                <Text style={styles.name}> First Last</Text>
            </View>
            <View style={styles.navList}>
                
                <TouchableHighlight >
                    <View style={styles.navListItem}>
                    <Text
                        style={styles.navListLabel}
                    >
                        Recent Spaces
                    </Text>
                    <Image
                        style={styles.chevron}
                        source = {require('../assets/icons/right-chevron.png')}
                    />
                    </View>
                    
                </TouchableHighlight>
            </View>
        </Animated.View>)
    }
}


const styles = StyleSheet.create({ 
    container: {
        height : Dimensions.get('window').height,
        zIndex : 10000,
        width : 280,
        position : "absolute",
        top : 0,
        left : 0,
        backgroundColor :"white",
        elevation : 4
    },
    navHeader : {
        display : "flex",
        flexDirection : "row",
        alignItems : "center",
        padding  : 16,
        paddingTop : 32,
        borderBottomWidth : 1,
        borderBottomColor : "black"
    },
    userimage : {
        height : 64,
        width : 64
    },
    name : {
        fontSize : 18,
        fontWeight : "600",
        marginLeft : 16
    },
    navList:{
        display: "flex",
        flexDirection : "column",
        width : 280
        
    },
    navListItem : {
        width : 280,
        padding : 16,
        display: "flex",
        flexDirection : "row",
        alignItems : "center",
        borderBottomWidth : 1,
        borderBottomColor : "black"
    },
    navListLabel : {
        fontWeight : "600",
        fontSize : 18,
        flexGrow : 1
    },
    chevron : {
        height : 16,
        width : 16
    },
    cancelWrapper : {
        position : "absolute",
        top : 32,
        left : 240
    },
    cancelImage : {
        height : 16,
        width : 16
    }
})