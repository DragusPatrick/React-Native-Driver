import React, { PureComponent } from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import Dash from 'react-native-dash';

import TripDetails from '../../screens/TripDetails';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class withoutDriver extends PureComponent {

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
                <View style={styles.itemHeaderEmpty}>
                    <Text style={{
                        fontSize: 14,
                        width: 260,
                        marginTop: 7,
                        paddingLeft: 7,
                        textAlign: 'left',
                        fontWeight: '600',
                        color: '#FFE4EB'
                    }}>{this.data.pickup_time} - 25 Jun, #{this.data.id} </Text>
                    <TouchableOpacity onPress={() => console.log('puff')} style={styles.burgerButton}>
                        <Text style={{
                            width: 50,
                            height: 25,
                            textAlign: 'center',
                            marginTop: 5,
                            color: '#FFE4EB',
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
                                }}>No Driver</Text>
                                <Text style={{
                                    color: '#f3fcfd',
                                    fontWeight: '400',
                                    fontSize: 14
                                }}>{this.data.vehicle.plate}</Text>
                                <Text style={{color: '#502236', fontWeight: '400', fontSize: 14, marginTop: 5,}}>
                                    Pending
                                </Text>
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
                                }}>{this.data.flight_number} </Text>
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
                                    {this.data.lastname}
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
                                    paddingBottom: 15
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

                <View style={styles.footerItem}>
                    <Text style={styles.itemFooterActive}>Accept</Text>
                    <Text style={styles.itemFooterActive}>Decline</Text>
                </View>

            </View>

        );
    }
}

export default withoutDriver;

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
        backgroundColor: '#f1b353',
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
    itemHeaderBusiness: {
        backgroundColor: '#602ff3',
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
    inline: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerItem: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        overflow: "hidden",
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopColor: '#1e1f24',
        borderTopWidth: 1,
        textAlign: 'center',
    },
    itemFooterActive: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        overflow: "hidden",
        color: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: '600',
        backgroundColor: '#e93343',
        paddingLeft: 10,
        padding: 5,
        paddingBottom: 10,
        width: '50%',
        paddingTop: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        textAlign: 'center',

    },
    itemFooter: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        overflow: "hidden",
        color: '#f4f8fe',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: '600',
        paddingLeft: 10,
        alignSelf: 'stretch',
        height: 40,
        width: '25%',
        paddingTop: 10,
        textAlign: 'center',
        borderColor:'red',borderBottomWidth:1,borderTopWidth:1
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
