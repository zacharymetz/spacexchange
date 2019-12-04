import React, { Component } from 'react';
import { StyleSheet, Text, View,Dimensions, Image,TextInput, TouchableHighlight ,Platform} from 'react-native';
import SideNav from './sideMenu';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        //  this is just a stand in for the actual compoents 
        this.state = {
            firstname: 'Danny',
            lastname: 'Grande',
            email: 'danny@grandes.ca',
            last_four: '5555',
            biography: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

        };


    }

    getInitials(firstname, lastname){
        return firstname[0].toUpperCase() + lastname[0].toUpperCase();
    }
    
  render(){
    const {navigate} = this.props.navigation;

    var {firstname} = this.state;
    var {lastname} = this.state;
    var {email} = this.state;
    var {biography} = this.state;

    var picture = null;
    let pictureContent ;

    if(picture != null) {
        pictureContent = <Text>HI</Text>
    }else{
        pictureContent = <View style={styles.pictureContent}><Text style={styles.pictureContent}>{this.getInitials(firstname, lastname)}</Text></View>
    }



    return (
        <View style={styles.container}>
            <View style={styles.back}>
                <TouchableHighlight style={styles.button} onPress={() => navigate('LoginRegister')}>
                    <Text style={styles.buttonText}> Logout </Text>
                </TouchableHighlight>
            </View>
            <View style={styles.topsection}>
                <View style={styles.topleft}>
                    <View style={styles.picture}>
                        {pictureContent}
                    </View>
                </View>
                <View style={styles.topleftprofile}>
                    <Text>
                        First Name:
                    </Text>
                    <Text>
                        Last Name:
                    </Text> 
                    <Text>
                        Email:
                    </Text>
                </View>
                <View style={styles.toprightprofile}>
                    <Text style={styles.value}>
                        {firstname}
                    </Text>
                    <Text style={styles.value}>
                        {lastname}
                    </Text>
                    <Text style={styles.value}>
                        {email}
                    </Text>
                </View>
            </View>
            <View style={styles.bottomsection}>
                <Text style={styles.biographyTitle}>Biography:</Text>
                <Text style={styles.value}>{biography}</Text>
            </View>    
        </View>
    );
  }
};


const styles = StyleSheet.create({ 
    container: {
        display:"flex",
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: "column",
    },
    topsection: {
        flexDirection: "row",
        height: "20%",
        width: "100%",
        marginTop: '40%',
    },
    topleft: {
        width: "33%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        flexDirection : "row",

    },
    topright: {
        width:"67%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: 30,
        
    },
    toprightprofile: {
        marginLeft:30,
    },
    bottomsection: {
        padding: 30,
    },
    value: {
        color: "#3b3b3b"
    },
    picture: {
        backgroundColor: "#3E3E3E",
        borderRadius: 150,
        width: 100,
        height: 100

    },
    pictureContent: {
        marginTop:10,
        marginLeft: 10,
        display: "flex",
        fontSize: 46,
        color: "white",
    },
    button : {
        backgroundColor : "#2a2e2b",
        width : "100%",
        display : "flex",
        flexDirection : "row",
        alignItems  : "center",
        padding : 8,
        borderRadius : 4,
        marginTop : 16,
        marginBottom : 16,
        alignSelf : "stretch"
        
    },
    buttonText : {
        color : "white",
        flexGrow : 1,
        textAlign : "center",
        fontSize : 32,fontWeight : "600"
        
    },
});