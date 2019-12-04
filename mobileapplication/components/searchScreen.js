import React, {Component} from 'react'
import { View, StyleSheet, Text, TouchableHighlight, Dimensions, Image} from 'react-native';
import { SearchBar } from 'react-native-elements';
import DropdownMenu from 'react-native-dropdown-menu';

export default class SearchScreen extends Component {
    constructor(props){
        super(props);

    }
    state = {
        search: '',
        text: ''
      };
    
      updateSearch = search => {
        this.setState({ search });
      };
    render(){
        const {navigate} = this.props.navigation;
        const { search } = this.state;
        var data = [["5km", "15km", "30km", "50km+"],
                    ["Cubicle", "Office", "Board Room"]];
        return(
            <View style={styles.searchScreen}>
                <View>
                    <SearchBar            
                        placeholder="Search"
                        onChangeText={this.updateSearch}
                        value={search}
                    />
                    <DropdownMenu
                    style={styles.dropDown}
                    bgColor={'white'}
                    tintColor={'#666666'}
                    activityTintColor={'green'}
                    handler={(selection, row) => this.setState({text: data[selection][row]})}
                    data={data}
                    >
                    </DropdownMenu>  
                </View>  
                <View>
                    <TouchableHighlight onPress={()=>navigate('SpaceCalender')}>   
                        <View style={styles.listItem}>
                            <Image source={require('../assets/cubical.jpg')} style={styles.listImage} resizeMode="cover"/>
                            <View style={styles.listItemContent}>
                                <Text style={styles.listItemTitle}>Cubical</Text>
                                <Text style={styles.listItemSubText}>$15 / Day</Text>
                            </View> 
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>navigate('SpaceCalender')}>   
                        <View style={styles.listItem}>
                            <Image source={require('../assets/cubical.jpg')} style={styles.listImage} resizeMode="cover"/>
                            <View style={styles.listItemContent}>
                                <Text style={styles.listItemTitle}>Cubical</Text>
                                <Text style={styles.listItemSubText}>$15 / Day</Text>
                            </View> 
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>navigate('SpaceCalender')}>   
                        <View style={styles.listItem}>
                            <Image source={require('../assets/cubical.jpg')} style={styles.listImage} resizeMode="cover"/>
                            <View style={styles.listItemContent}>
                                <Text style={styles.listItemTitle}>Cubical</Text>
                                <Text style={styles.listItemSubText}>$15 / Day</Text>
                            </View> 
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    searchScreen: {
        width: Dimensions.get('window').width, 
        display:"flex",
        paddingTop: 40
    },
    dropDown: {
        margin:5
    },
    amenitiesHeader: {
        display: "flex",
        flexDirection: "row"
    },
    headerText: {
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        marginBottom: 0,
        flex: 1
    },      list :{
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
});
  