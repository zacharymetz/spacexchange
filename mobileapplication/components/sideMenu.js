import React, {Component,useState, useEffect} from 'react'
import { Animated,StyleSheet, Text, View, Dimensions, Image,TextInput, TouchableHighlight ,Platform} from 'react-native';

import ReactNative from 'react-native';


export default class SideNav extends Component {
    constructor (props){
        super(props)

        this.state = {
            bounceValue: new Animated.Value(0),
            bouncePrimeValue: new Animated.Value(100),
            xWapper: 280,
            Wapper : 0,
            isOpen : false
        };
    }

    toggle(state){
        this.setState({
            
            isOpen : state
        });
        var toValue = 0;
        var toPrimeValue = Dimensions.get('window').height;

        if(state) {
            toValue = -280;
            toPrimeValue = 64;
        }

        Animated.spring(
            this.state.bounceValue,
            {
              toValue: toValue,
              velocity: 3,
              tension: 2,
              friction: 8,
            }
          ).start();
          Animated.spring(
            this.state.bouncePrimeValue,
            {
              toValue: toPrimeValue,
              velocity: 3,
              tension: 2,
              friction: 8,
            }
          ).start();
          
        
    }

    render(){
        return(
            <View style={[styles.main]}>
                <View style={{position :"absolute", top :40, left : 16}} >
            <TouchableHighlight style={{padding:8,backgroundColor:"white",borderRadius:50, elevation : 3}}
                onPress={()=>this.toggle(false)}>
                <Image style={{height :24, width :24}}
                resizeMode='contain'
                source ={require('../assets/icons/menu.png')} />
            </TouchableHighlight>
        </View>
        <Animated.View style={[styles.container,
            {transform: [{translateX: this.state.bounceValue}]}]} >
            
            <TouchableHighlight onPress={()=>this.toggle(false)}>
            <View style={styles.cancelWrapper}>
                <Image
                            style={styles.cancelImage}
                            source = {require('../assets/icons/cancel.png')}
                        />
                 </View>       
           </TouchableHighlight>
           
            <View style={styles.navHeader}>
                <Image
                    style={styles.userimage}
                    source = {require('../assets/icons/user.png')}
                />
                <Text style={styles.name}> First Last</Text>
            </View>
            <View style={styles.navList}>
                
                <TouchableHighlight onPress={()=>this.toggle(true)}>
                    <View style={styles.navListItem}>
                    <Text
                        style={styles.navListLabel}
                    >
                        Search Spaces
                    </Text>
                    <Image
                        style={styles.chevron}
                        source = {require('../assets/icons/right-chevron.png')}
                    />
                    </View>
                    
                </TouchableHighlight>
                <TouchableHighlight onPress={()=>this.toggle(true)}>
                    <View style={styles.navListItem}>
                    <Text
                        style={styles.navListLabel}
                    >
                        Past Transactions
                    </Text>
                    <Image
                        style={styles.chevron}
                        source = {require('../assets/icons/right-chevron.png')}
                    />
                    </View>
                    
                </TouchableHighlight>
                <TouchableHighlight onPress={()=>this.toggle(true)}>
                    <View style={styles.navListItem}>
                    <Text
                        style={styles.navListLabel}
                    >
                        Account
                    </Text>
                    <Image
                        style={styles.chevron}
                        source = {require('../assets/icons/right-chevron.png')}
                    />
                    </View>
                    
                </TouchableHighlight>
                <TouchableHighlight onPress={()=>this.toggle(true)}>
                    <View style={styles.navListItem}>
                    <Text
                        style={styles.navListLabel}
                    >
                        Back
                    </Text>
                    <Image
                        style={[styles.chevron,{transform: [{ rotate: '180deg' }]}]}
                        source = {require('../assets/icons/right-chevron.png')}
                    />
                    </View>
                    
                </TouchableHighlight>
                
            </View>
            <View style={{width : 280,
        padding : 32,
        display: "flex",
        flexDirection : "column",
        alignItems : "center",flexGrow:1,justifyContent:"flex-end"}}>
                    <Text styles={{fontSize:24,fontWeight:500}}>Spaceful</Text>
                    <Text styles={{fontSize:24,fontWeight:500}}>V 0.0.1</Text>
                    <Text styles={{fontSize:24,fontWeight:500}}>Terms | Privacy | About</Text>
                    
                </View>
        </Animated.View>
        </View>)
    }
}


const styles = StyleSheet.create({ 
    main:{
        position : "absolute",
        zIndex : 1,
        width:0,
        alignSelf : "flex-start"
    },

    container: {
        height : Dimensions.get('window').height,
        zIndex : 1000,
        width : 280,
        position : "relative",
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
        top : 64,
        left : 240,height : 16,
        width : 16,
        
        backgroundColor : "black"
    },
    cancelImage : {
        height : 16,
        width : 16
    }
})