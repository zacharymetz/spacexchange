import React, { Component } from 'react';
import { StyleSheet, Text, View,Dimensions, Image,TextInput, TouchableHighlight ,Platform} from 'react-native';
import MapView ,{UrlTile, Marker} from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import SideNav from './sideMenu'
import ShoppingCart from './shoppingCart'
import SideMenu from './sideMenu';
export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        //  this is just a stand in for the actual compoents 
        this.entries = [
            {
                //  the very first on is kinda special so 
                inital : true,  //  this is what it will check for in
                                //  the render 
                message : "Swipe left To start looking"   
            },
            {
            title : "first",
            latLong : {
                latitude: 51.0447,
                longitude: -114.0719,
              }
        },{
            title : "second" ,
            latLong : {
                latitude: 51.03,
                longitude: -114.078,
                latitudeDelta: 0.0922 / 100,
                longitudeDelta: 0.0421 / 100,
              }
        },{
            title : "third",
            latLong : {
                latitude: 51.045,
                longitude: -114.085,
                latitudeDelta: 0.0922 / 100,
                longitudeDelta: 0.0421 / 100,
              }
        }];
        this.markers = [];

        for(var i =1;i<this.entries.length;i++){
            this.markers.push(<Marker
                coordinate={this.entries[i].latLong}
                title={this.entries[i].title}
                description={"$15"}
              />);
              
        }
        this.mapRef = null;
        
      }

      _centerMapOnMarker (markerIndex) {
        const mapRef = this.mapRef;
        const markerData = this.entries[markerIndex].latLong;

        if (!markerData || !mapRef) {
            return;
        }
        
        mapRef.animateToRegion({
            latitude: markerData.latitude ,
            longitude: markerData.longitude,
            latitudeDelta: 0.0922 / 5,
            longitudeDelta: 0.0421 / 5,
            maximumZ : 25
        });
    }

  render() {
    const {navigate} = this.props.navigation;
    var region = {
        latitude: 51.0447,
        longitude: -114.0719,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
    var tileUrl = "https://map.logicx.ca/hot/{z}/{x}/{y}.png";
   
    const map = (
          
    <MapView style={styles.map} initialRegion={region} provider={null}
     
        ref={(ref) => { this.mapRef = ref }}
            mapType={Platform.OS == "android" ? "none" : "standard"}>

            {this.markers}


        <UrlTile urlTemplate={tileUrl} maximumZ={19} tileSize={256} />
    </MapView>);

    const menu = (
    <SideMenu>
         <TouchableHighlight onPress={() => navigate('TransactionsSummary')}>
            <View style={styles.navListItem}>
            <Text style={styles.navListLabel}>
                Past Transactions
            </Text>
            <Image style={styles.chevron} source = {require('../assets/icons/right-chevron.png')}/>
            </View>
        </TouchableHighlight>
    </SideMenu>
    );
    
    return (
        <View style={styles.container}>
        {menu}
          {map}
          <View style={styles.slider}>
          <Carousel
                 onSnapToItem={(index)=>{
                     // select this maker from the markers list ? 
                     
                     this._centerMapOnMarker(index);
                 }}
              data={this.entries}
              renderItem={ ({item, index}) => { 
                  
                    if(index == 0){
                        return(  
                            <TouchableHighlight>
                                <View style={styles.sliderItem}>
                                    <View  style={{flexDirection : "row"}}>
                                        <Text style={styles.sliderItemText}>Click to Search</Text> 
                                    </View>
                                </View>
                            </TouchableHighlight>
                        )
                    }
                    else {
                        return(
                            <TouchableHighlight onPress={() => navigate('LocationListing', {item : item})}>
                                <View style={styles.sliderItem}>
                                    <Image  source={require('../assets/cubical.jpg')} style={styles.sliderItemImage} />
                                    <View  style={{flexDirection : "row"}}>
                                        <Text style={styles.sliderItemText}>{ item.title }</Text>
                                        <Text style={styles.sliderSubText}>$15</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        )
                    }
                }}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={Dimensions.get('window').width / 1.7}
            />
        </View>
        
        <View style={{position :"absolute", top :40, right: 16}} >
            <TouchableHighlight style={{padding:8,backgroundColor:"white",borderRadius:50, elevation : 3}}
                onPress={()=>navigate('ShoppingCart')}>
                <Image style={{height :24, width :24}}
                resizeMode='contain'
                source ={require('../assets/icons/shopping-cart.png')} />
            </TouchableHighlight>
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
        justifyContent : "center",
        flexDirection: "column",
        height : "100%"
        
      },
    map : {
        flex : 1,
        height : Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        
        
    },
    slider :{
        height : 200,
        position : "absolute",
        bottom : 0,
        left :0
    },
    sliderItem : {
        marginTop : 10,
        height : 180,
        display : "flex",
        flexDirection : "column",
        shadowOpacity: 0.75,
        shadowRadius: 1,
        shadowColor: 'black',
        shadowOffset: { height: 0, width: 0 },
        borderRadius : 5,
        elevation  :1,
        backgroundColor : "white"
    },
    sliderItemImage : {
        flexGrow : 1,
        flex : 1,
        width: null,
        height: null,
        resizeMode: 'cover'     
    },
    sliderItemText : {
        margin: 8,
        paddingLeft : 8,
        fontSize : 16,
        flexGrow : 1

    },
    sliderSubText :{
        fontSize : 12,
        color : "gray",
        margin: 8,
    },

    confirm : {
        display : "flex",
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center",
        
    },

    confimInput :{
        borderBottomColor : "black",
        borderBottomWidth : 2,
        fontSize : 32,
        fontWeight  : "600",
        margin : 16
    },
    socailIcon: {
        height : 32,
        width : 32
    },
    loginText : {
        color : "white",
        flexGrow : 1,
        textAlign : "center",
        fontSize : 18
        
    },
    button : {
        backgroundColor : "red",
        width : "100%",
        display : "flex",
        flexDirection : "row",
        alignItems  : "center",
        padding : 8,
        borderRadius : 4,
        marginTop : 16
        
    },
    buttonText : {
        color : "white",
        flexGrow : 1,
        textAlign : "center",
        fontSize : 32,fontWeight : "600"
        
    },
    resend:{
        color : "red",
        fontWeight : "600",
        textAlign : "center"
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
});