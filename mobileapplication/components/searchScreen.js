import React, {Component} from 'react'
import { View, StyleSheet, Text, TouchableHighlight, Dimensions} from 'react-native';
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
                <SearchBar            
                    placeholder="Search"
                    onChangeText={this.updateSearch}
                    value={search}
                />
                <View style={{flex: 1}}>
                    <View/>
                        <DropdownMenu
                        style={{flex: 1}}
                        bgColor={'white'}
                        tintColor={'#666666'}
                        activityTintColor={'green'}
                        handler={(selection, row) => this.setState({text: data[selection][row]})}
                        data={data}
                        >
                        </DropdownMenu>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchScreen: {
        height : Dimensions.get('window').height,
        width: Dimensions.get('window').width, 
        display:"flex",
        alignItems: 'stretch',
        paddingTop: 40
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
    }
});
  