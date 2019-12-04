import React, {Component} from 'react'
import { View, StyleSheet, Text, TouchableHighlight, Dimensions} from 'react-native';

export default class TransactionsSummary extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.full_screen}>
                <View style={styles.header}>
                    <Text style={fontSize= 14}>
                        Transactions
                    </Text>
                </View>

                {/* Transactions List*/}
                <View style={styles.list}>  
                    <TouchableHighlight onPress={() => navigate('SpecificTransaction')}>
                        <View style={styles.listItem}>
                            <View>
                                <Text>Cauliflower Tower</Text>
                                <Text>November 26, 2019</Text>
                            </View> 
                            <View style={styles.white_space} />
                            <Text style={styles.listPrice}>$220</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.listItem}>
                            <View>
                                <Text>RBC Building</Text>
                                <Text>November 26, 2019</Text>
                            </View> 
                            <View style={styles.white_space} />
                            <Text style={styles.listPrice}>$150</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.listItem}>
                            <View>
                                <Text>9th Avenue Place</Text>
                                <Text>November 26, 2019</Text>
                            </View>
                            <View style={styles.white_space} />
                            <Text style={styles.listPrice}>$300</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        borderBottomWidth: 2,
        padding: 10,
        borderBottomColor: "black"
    },
    full_screen: {
        display: "flex",
        flexDirection: "column",
        height : Dimensions.get('window').height,
        width : Dimensions.get('window').width
    },
    white_space: {
        flexGrow: 1
    },
    list: {
        display : "flex",
        flexDirection : "column",
        width : Dimensions.get('window').width,
        borderTopWidth : 2,
        borderTopColor : "black"
    },
    listItem: {
        borderBottomWidth : 2,
        borderBottomColor : "black",
        display : "flex",
        flexDirection : "row",
        padding: 5
    },
    listPrice: {
        padding: 7
    }
});
  