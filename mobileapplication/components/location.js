import React, { Component } from 'react';
import { StyleSheet, Text,SafeAreaView , View,Dimensions,ScrollView, Image,TextInput, TouchableHighlight ,Platform} from 'react-native';
import MapView ,{UrlTile, Marker} from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';

export default class LocationListing extends Component {
    constructor(props){
        super(props);
        this.state = {
            entries : [{
                image : require('../assets/locations/rbc/rbc_foodcourt.jpeg'),
            },{
                image : require('../assets/locations/rbc/ping-pong.jpeg'),
            },{
                image : require('../assets/locations/rbc/rbc_inside_2.jpeg'),
            }]
        };
    }

    render (){
        const {navigate} = this.props.navigation;
        var region = {
            latitude: 51.0447,
            longitude: -114.0719,
            latitudeDelta: 0.0922 / 100,
            longitudeDelta: 0.0421 / 100,
        };
        var tileUrl = "https://map.logicx.ca/hot/{z}/{x}/{y}.png";
    
        const map = (
            
        <MapView style={styles.map} initialRegion={region} provider={null}
            z
            ref={(ref) => { this.mapRef = ref }}
                mapType={Platform.OS == "android" ? "none" : "standard"}>

                <Marker
                coordinate={region}
                title={"My Location"}
                description={"$15"}
              />


            <UrlTile urlTemplate={tileUrl} maximumZ={19} tileSize={256} />
        </MapView>);
        
        return (
            < SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
        {map}
            <View >
                
                <View style={styles.headerWrap}>
                <Text style={styles.headerTitle}>Cauliflower Tower</Text>
                <Text>123 Fake Street, Calgary Alberta</Text>
                </View>
            </View>
            
            <View style={styles.section}>
                <Text style={styles.title}>About</Text>
                <Text>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </Text>
            </View>
            
            <View style={styles.section}>
                <Text style={styles.title}>Amentites</Text>
                <View style={styles.amentites}>
                    <View style={styles.amentitesItem}>
                        <Image  style={styles.amentitesIcon} source={require('../assets/icons/wifi.png')}/>
                        <Text style={styles.amentitesTitle}>Wifi</Text>
                    </View>

                    <View style={styles.amentitesItem}>
                        <Image  style={styles.amentitesIcon} source={require('../assets/icons/take-away.png')}/>
                        <Text style={styles.amentitesTitle}>Coffee</Text>
                    </View>

                    <View style={styles.amentitesItem}>
                        <Image  style={styles.amentitesIcon} source={require('../assets/icons/snack.png')}/>
                        <Text style={styles.amentitesTitle}>Snacks</Text>
                    </View>

                    <View style={styles.amentitesItem}>
                        <Image  style={styles.amentitesIcon} source={require('../assets/icons/table.png')}/>
                        <Text style={styles.amentitesTitle}>Boardrooms</Text>
                    </View>
                    <View style={styles.amentitesItem}>
                        <Image  style={styles.amentitesIcon} source={require('../assets/icons/printer.png')}/>
                        <Text style={styles.amentitesTitle}>Printer</Text>
                    </View>
                </View>
            </View>

            <View >
                <View style={styles.section}>
                    <Text style={styles.title}>Spaces</Text>
                </View>
                <View style={styles.list}>
                    <TouchableHighlight style={styles.button} onPress={()=>navigate('SpaceCalender')}>   
                        <View style={styles.listItem}>
                            <Image source={require('../assets/cubical.jpg')} style={styles.listImage} resizeMode="cover"/>
                            <View style={styles.listItemContent}>
                                <Text style={styles.listItemTitle}>Cubical</Text>
                                <Text style={styles.listItemSubText}>$15 / Day</Text>
                            </View> 
                        </View>
                    </TouchableHighlight>
                    <View style={styles.listItem}>
                        <Image source={require('../assets/spaces/office_space.jpg')} style={styles.listImage} resizeMode="cover"/>
                        <View style={styles.listItemContent}>
                            <Text style={styles.listItemTitle}>Private Office</Text>
                            <Text style={styles.listItemSubText}>$30 / Day</Text>
                        </View>
                    </View>
                    <View style={styles.listItem}>
                        <Image source={require('../assets/spaces/board_room.jpeg')} style={styles.listImage} resizeMode="cover"/>
                        <View style={styles.listItemContent}>
                            <Text style={styles.listItemTitle}>Boardroom</Text>
                            <Text style={styles.listItemSubText}>$20 / hour</Text>
                        </View>
                    </View>
                </View>
            </View>


            <View style={styles.section}>
                <Text style={styles.title}>Media</Text>
            </View>
            <Carousel style={styles.mediaCarousel}
                    data={this.state.entries}
                    renderItem={({item, index})=>{
                        return (
                        <View>
                            <Image style={styles.cardImage} source={item.image} resizeMode="cover"/>
                        </View>)
                    }}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={Dimensions.get('window').width/1.3}
            />
            <View style={styles.section}>
                <View style={{display : "flex", flexDirection : "row"}}>
                    <Text style={styles.title}>Reviews</Text>
                </View>   
                <View style={styles.reviewList}>
                    <View style={styles.review}>
                        <View style={{display : "flex", flexDirection : "row"}}>
                        <Text style={{marginBottom:8}}>Place Didnt Have Good Coffee</Text>
                        <View style={{display : "flex", flexDirection : "row", flexGrow: 1, justifyContent : "flex-end"}}>
                            <Image style={styles.reviewStar} source={require('../assets/starempty.png')} />
                            <Image style={styles.reviewStar} source={require('../assets/star.png')} />
                            <Image style={styles.reviewStar} source={require('../assets/star.png')} />
                            <Image style={styles.reviewStar} source={require('../assets/star.png')} />
                            <Image style={styles.reviewStar} source={require('../assets/star.png')} />
                        </View>  
                    </View>
                    <Text>There might be something wrong with the coffee make ? I'm Not so sure it could honestly be aything so why not go for it </Text>
                    </View>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.title}>About Landlord</Text>
                <Text>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Text>
            </View>

        </ScrollView>
        </SafeAreaView>)
    }
}

const styles = StyleSheet.create({ 
    container: {
        display:"flex",
        backgroundColor: '#fff',
        flexDirection: "column",
        height : "100%"
      },
      headerImage :{
            height : 0,
          width : Dimensions.get('window').width,
          resizeMode: 'cover',
          
      }, reviewStar: {
        height : 20,
        width : 20,
        marginLeft : 4
      },reviewSummaryItem : {
          flexBasis : "50%",
          marginBottom : 8,
          display :"flex",
          flexDirection : "column",
          alignItems : "flex-start",
          justifyContent : "center"
      },
      reviewSummary : {
        display : "flex",
        flexDirection : "row",
        flexWrap : "wrap"

      },reviewSummaryItemText :{
          marginBottom : 8,
          marginLeft : 4
      },review : {
          marginTop : 16
      },
      //    same height as header iamge
      headerWrap: {
          width : Dimensions.get('window').width,
          display : "flex",
          flexDirection : "column",
          justifyContent : "flex-end",
          padding : 16,
          zIndex : 10000,
          backgroundColor : "white",
      },
      headerTitle : {
          fontSize : 32,
          fontWeight : "600"
      },
      section :{
        padding : 32,
        paddingBottom : 0,
        width : Dimensions.get('window').width,
      },
      map : {
          height : 200,
          width : Dimensions.get('window').width
      },
      title : {
        fontSize : 18,
        fontWeight : "600" ,
        marginBottom : 16
      },
      amentites:{
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-evenly"
      },
      amentitesItem :{
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center",
        margin : 16
      },
      amentitesIcon :{
        height : 48,
        width : 48,
        marginBottom: 8
      },
      amentitesTitle:{
        fontSize  : 12
      },
      list :{
        display : "flex",
        flexDirection : "column",
        width : Dimensions.get('window').width,
        borderTopWidth : 2,
        borderTopColor : "black"
      },
      listItem:{
        borderBottomWidth : 2,
        borderBottomColor : "black",
        display : "flex",
        flexDirection : "row"
      },
      listImage:{
        height : 96,
        width : 128,
      },
      listItemContent:{
        height : 96,
        display : "flex",
        flexGrow : 1,
        padding: 8,
        alignItems : "flex-end",
        justifyContent : "flex-start", 
        flexDirection : "row",
        borderLeftWidth : 2,
        borderLeftColor : "black"
      },
      listItemTitle : {
          fontSize : 22,
          fontWeight : "600",
          flexGrow : 1
      },
      ItemListSubText : {
            textAlign : "right"
      },
      mediaCarousel: {
        height : (Dimensions.get('window').width/1.3) + 20
      },
      cardImage: {
          height: (Dimensions.get('window').width/1.3),
          width: (Dimensions.get('window').width/1.3),
      }
    }
)