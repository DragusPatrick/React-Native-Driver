import React from 'react';
import {Platform, StyleSheet, View, Text, ScrollView, Dimensions, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {List, ListItem} from "native-base";
import List_planned  from '../components/lists/list_planned';
import List_withoutDriver  from '../components/lists/withoutDriver';

const { width, height } = Dimensions.get('screen');

class Planned extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            data2: []
        }
    }

    componentDidMount(){
        var request_1_url = url = 'https://api.blackhansa.de/api/bookings/planned'
        var request_2_url = url = 'https://api.blackhansa.de/api/bookings/withoutdriver'

        fetch(request_1_url).then((response) => response.json()).then((responseData)  => {
            this.setState({
                data: responseData.bookings.data,
            }, function(){

            });
        }).then(()=>{
            fetch(request_2_url).then((response) => response.json()).then((responseData) => {
                this.setState({
                    data2: responseData.bookings.data,
                }, function(){

                });
            }).done();
        }).done();
    }

    renderTrip({ item, index }) {
        return (
            <View>
                ... // display other properties of the post
                // Then display the "like" button
                <Icon
                    name='favorite'
                    size={25}
                    color={item.liked ? 'red' : 'gray'}
                    containerStyle={someStyle}
                    iconStyle={someStyle}
                    onPress={() => this.onLikePost({ item, index })}
                />
                ...
            </View>
        );
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <SafeAreaView style={{backgroundColor: '#000'}}>
                    <View style={{padding: 10, justifyContent: 'center',alignItems: 'center',}}>
                        <Text style={{color: '#fff', fontWeight: '600', fontSize: 20}}>Planned</Text>
                    </View>

                    <ScrollView>
                        <View style={{ marginTop: 5 }}>
                            <List
                                dataArray={this.state.data2}
                                extraData={this.state}
                                renderRow={(item) => {
                                    return (
                                        <ListItem>
                                            <List_withoutDriver data={item} />
                                        </ListItem>
                                    )
                                }
                                }
                            />
                        </View>

                        <View style={{ marginTop: 5 }}>
                                <List
                                    dataArray={this.state.data}
                                    extraData={this.state}
                                    renderRow={(item) => {
                                        return (
                                            <ListItem>
                                                <List_planned data={item} />
                                            </ListItem>
                                        )
                                    }
                                    }
                                />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}

export default Planned;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        width:'100%',
        alignSelf:'center'
    },
    listItem: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    item: {
        marginRight: 0,
        width: '100%',
        alignSelf: 'stretch',
    },
    icon: {
        fontSize: 25,
        marginRight: 10,
        color: '#dbdce0',
    },
    itemHeader: {
        backgroundColor: '#fffeca',
        borderBottomWidth: 2,
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header: {
        paddingTop: 48,
        paddingHorizontal: 36,
        paddingBottom: 24,
    },
    column: {
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        flexDirection: 'column',
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
        flexDirection: 'row',
        alignItems: 'center',
    },
});
