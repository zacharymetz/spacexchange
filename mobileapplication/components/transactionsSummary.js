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
                    <Text style={styles.textStyles}>
                        Past Transactions
                    </Text>
                </View>

                {/* Transactions List*/}
                <View style={styles.list}>  
                    <TouchableHighlight onPress={() => navigate('SpecificTransaction')}>
                        <View style={styles.listItem}>
                            <View>
                                <Text style={styles.textStyles}>Cauliflower Tower</Text>
                                <Text style={styles.textStyles}>November 26, 2019</Text>
                            </View> 
                            <View style={styles.white_space} />
                            <Text style={styles.listPrice}>$220</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.listItem}>
                            <View>
                                <Text style={styles.textStyles}>RBC Building</Text>
                                <Text style={styles.textStyles}>November 26, 2019</Text>
                            </View> 
                            <View style={styles.white_space} />
                            <Text style={styles.listPrice}>$150</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={styles.listItem}>
                            <View>
                                <Text style={styles.textStyles}>9th Avenue Place</Text>
                                <Text style={styles.textStyles}>November 26, 2019</Text>
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
        borderBottomColor: "black",
        fontSize: 20
    },
    full_screen: {
        display: "flex",
        flexDirection: "column",
        height : Dimensions.get('window').height,
        width : Dimensions.get('window').width,
        fontSize: 20
    },
    white_space: {
        flexGrow: 1
    },
    list: {
        display : "flex",
        flexDirection : "column",
        width : Dimensions.get('window').width,
        borderTopWidth : 2,
        borderTopColor : "black",
        fontSize: 20
    },
    listItem: {
        borderBottomWidth : 2,
        borderBottomColor : "black",
        display : "flex",
        flexDirection : "row",
        padding: 5,
        fontSize: 20
    },
    listPrice: {
        padding: 7,
        fontSize: 20
    },
    textStyles: {
        fontSize: 18,
        margin: 2
    }
});
  