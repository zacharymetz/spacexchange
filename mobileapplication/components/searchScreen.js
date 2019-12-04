import React, {Component} from 'react'
import { View, StyleSheet, Text, TouchableHighlight, Dimensions} from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class SearchScreen extends Component {
    constructor(props){
        super(props);
    }
    state = {
        search: '',
      };
    
      updateSearch = search => {
        this.setState({ search });
      };
    render(){
        const {navigate} = this.props.navigation;
        const { search } = this.state;

        return(
            <View style={styles.searchBar}>
                <SearchBar
                    
                    placeholder="Search"
                    onChangeText={this.updateSearch}
                    value={search}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchBar: {
        height : Dimensions.get('window').height,
        width: Dimensions.get('window').width, 
        display:"flex",
        alignItems: 'stretch',
        paddingTop: 40
    }
});
  