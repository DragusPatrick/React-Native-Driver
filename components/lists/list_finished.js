import React, { PureComponent } from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import Dash from 'react-native-dash';

import TripDetails from '../../screens/TripDetails';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class list_finished extends PureComponent {

    constructor(props) {
        super(props);

        this.data = props.data;
    }

    getSize() {
        return {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
        }
    }

    render() {
            return (
                <View style={styles.item}>
                    <View style={styles.itemHeader}>
                        <Text style={{
                            fontSize: 14,
                            width: 260,
                            marginTop: 7,
                            paddingLeft: 7,
                            textAlign: 'left',
                            fontWeight: '600',
                            color: '#dbdce0'
                        }}>{this.data.pickup_time} - 25 Jun, #{this.data.id} - {this.data.vehicle.bussiness_type}</Text>
                        <TouchableOpacity onPress={() => console.log('puff')} style={styles.burgerButton}>
                            <Text style={{
                                width: 50,
                                height: 25,
                                textAlign: 'center',
                                marginTop: 5,
                                color: '#dbdce0',
                                fontWeight: '600'
                            }}>HELP</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.wrapper}>
                        <View style={styles.column_bordered}>
                            <View style={styles.listItem}>
                                <View>
                                    <Icon
                                        name="ios-car"
                                        color="#dbdce0"
                                        size={25}
                                        style={styles.iconBackground}
                                    />
                                </View>
                                <View>
                                    <Text style={{
                                        color: '#f2faf6',
                                        fontSize: 16,
                                        marginBottom: 5,
                                        fontWeight: '600'
                                    }}>
                                        {this.data.driver.name}
                                    </Text>
                                    <Text style={{
                                        color: '#f3fcfd',
                                        fontWeight: '400',
                                        fontSize: 14
                                    }}>hjg</Text>
                                    <Text style={{color: '#f5e0df', fontWeight: '400', fontSize: 14, marginTop: 5,}}>One
                                        Way</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.column}>
                            <View style={styles.listItem}>
                                <View>
                                    <Text style={{color: '#f2faf6', fontSize: 16, marginBottom: 5, fontWeight: '600'}}>
                                        {this.data.pickup_address}
                                    </Text>
                                    <Text style={{color: '#f3fcfd', fontWeight: '300', fontSize: 14}}>Terminal bla bla
                                        lorem ipsum</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.wrapper}>
                        <View style={styles.column}>
                            <View style={styles.listItem}>
                                <View>
                                    <Icon
                                        name="ios-airplane"
                                        color="#dbdce0"
                                        size={25}
                                        style={styles.iconBackground}
                                    />
                                </View>
                                <View style={styles.inline}>
                                    <Text style={{
                                        color: '#f2faf6',
                                        fontSize: 16,
                                        marginBottom: 5,
                                        fontWeight: '600',
                                        paddingTop: 10
                                    }}>{this.data.flight_number}</Text>
                                </View>
                            </View>

                            <View style={styles.listItem}>
                                <View>
                                    <Icon
                                        name="ios-contact"
                                        color="#dbdce0"
                                        size={25}
                                        style={styles.icon}
                                    />
                                </View>
                                <View>
                                    <Text style={{color: '#f2faf6', fontSize: 16, marginBottom: 5, fontWeight: '600'}}>
                                        {this.data.firstname}
                                        {this.data.lastname }
                                    </Text>
                                    <Text style={{
                                        color: '#f3fcfd',
                                        fontWeight: '400',
                                        fontSize: 14
                                    }}>{this.data.pickup_sign}</Text>
                                    <Text style={{
                                        color: '#7f8abc',
                                        fontWeight: '400',
                                        fontSize: 12,
                                        marginTop: 10,
                                        borderColor: '#7f8abc',
                                        padding: 5,
                                        borderWidth: 1,
                                        height: 50,
                                        width: 115
                                    }}>{this.data.additional_info}</Text>
                                </View>
                            </View> 
                        </View>

                        <View style={styles.column}>
                            <View flex center style={styles.listItem}>
                                <View>
                                    <Text style={{
                                        color: '#f2faf6',
                                        fontSize: 16,
                                        marginBottom: 5,
                                        fontWeight: '400',
                                        paddingTop: 10,
                                        paddingBottom: 35
                                    }}>ca. 11km</Text>
                                </View>
                            </View>

                            <View style={styles.listItem}>
                                <View flex bottom>
                                    <Text style={{
                                        color: '#f2faf6',
                                        fontSize: 16, 
                                        marginBottom: 5,
                                        fontWeight: '600'
                                    }}>
                                        {this.data.drop_address}
                                    </Text>
                                    <Text style={{
                                        color: '#f3fcfd',
                                        fontWeight: '300',
                                        fontSize: 14
                                    }}>{this.data.drop_address}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            );
    }
}

export default list_finished;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212429',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        width:'100%',
        alignSelf:'center'
    },
    listItem: {
        flexDirection: 'row',
        marginBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        width: '100%',
    },
    icon: {
        fontSize: 25,
        marginRight: 10,
        padding: 5,
        color: '#dbdce0',
    },
    iconBackground: {
        fontSize: 25,
        marginRight: 10,
        color: '#dbdce0',
        backgroundColor: '#374372',
        padding: 5,
    },
    item: {
        alignSelf: 'stretch',
        borderRadius: 20,
        flex: 1,
        backgroundColor: '#131626',
        marginRight: 0,
        width: 380,
    },
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    itemHeader: {
        backgroundColor: '#90A468',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        overflow: "hidden",
        color: '#fff',
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:5,
        paddingLeft: 10,
    },
    itemHeaderEmpty: {
        backgroundColor: '#e93343',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        overflow: "hidden",
        color: '#271a17',
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:5,
        paddingLeft: 10,
    },
    itemHeaderCity: {
        backgroundColor: 'brown',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        overflow: "hidden",
        color: '#271a17',
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:5,
        paddingLeft: 10,
    },
    inline: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerItem: {
        backgroundColor: '#90A468',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        overflow: "hidden",
        color: '#271a17',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:5,
    },
    itemFooterActive: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        overflow: "hidden",
        color: '#dbdce0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: '600',
        backgroundColor: '#90A468',
        paddingLeft: 10,
        padding: 5,
    },
    itemFooter: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        overflow: "hidden",
        color: '#f4f8fe',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: '600',
        backgroundColor: '#e7ab5a',
        paddingLeft: 10,
        alignSelf: 'stretch',
        height: 40,
    },
    header: {
        paddingTop: 48,
        paddingHorizontal: 36,
        paddingBottom: 24,
    },
    column: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flex: 1,
        width: '50%',
    },
    column_bordered: {
        borderBottomWidth: 2,
        borderBottomColor: '#303249',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flex: 1,
        width: '50%',
        marginBottom: 15,
    },
    topHeader: {
        flex: 1,
        marginLeft: 25,
        marginTop: 65,
        justifyContent: 'center',
        alignItems: 'center',
    },
    firstRow: {
        flex: 1,
        marginLeft: 25,
        marginRight: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
