import React from 'react';
import { Platform, Button, StyleSheet, View, Text, ScrollView, Dimensions, Image } from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Icon from "react-native-vector-icons/Ionicons";
import GradientButton from 'react-native-gradient-buttons';

const { width, height } = Dimensions.get('screen');

const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#1e2126', margin: 15, borderRadius: 10 }]}>
        <View style={styles.item}>
            <View style={{paddingRight: 5}}>
                <View style={styles.listItemWithBtn}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="ios-clock"
                              color="#dbdce0"
                              size={25}
                              style={styles.icon}
                        />
                        <Text style={{color: '#b5b5ba', fontSize: 14, marginBottom: 10, marginTop: 5, width:185, textAlign: 'left'}}>Fri 07 Jun 2019, 19:25</Text>
                        <Text style={{width:100, height: 25, textAlign: 'center', marginBottom: 5, color: '#fff', backgroundColor: '#6858d3', paddingTop: 3, borderRadius: 10}}>Bussiness</Text>
                    </View>
                    <View>
                        <Text style={{color: '#df6331', paddingLeft: 30, fontWeight: '700'}}>Add to calendar</Text>
                    </View>
                </View>

                <View style={styles.listItemWithBtn}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="ios-clock"
                              color="#dbdce0"
                              size={25}
                              style={styles.icon}
                        />
                        <Text style={{color: '#b5b5ba', fontSize: 14, marginBottom: 10, marginTop: 5, width:185, textAlign: 'left'}}>Thomas</Text>
                    </View>
                    <View>
                        <Text style={{color: '#df6331', paddingLeft: 30, fontWeight: '700'}}>Change</Text>
                    </View>
                </View>

                <View style={styles.listItemWithBtn}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="ios-clock"
                              color="#dbdce0"
                              size={25}
                              style={styles.icon}
                        />
                        <Text style={{color: '#b5b5ba', fontSize: 14, marginBottom: 10, marginTop: 5, width:185, textAlign: 'left'}}>LDS-HN855</Text>
                    </View>
                    <View>
                        <Text style={{color: '#df6331', paddingLeft: 30, fontWeight: '700'}}>Change</Text>
                    </View>
                </View>

                <View style={styles.listItem}>
                    <View>
                        <Icon
                            name="ios-car"
                            color="#dbdce0"
                            size={25}
                            style={styles.icon}
                        />
                    </View>
                    <View>
                        <Text style={{ color: '#a6a7ac', fontSize: 16, marginBottom: 5 }}>Airport Berlin Tegel (TXL)</Text>
                        <Text style={{ color: '#b5b5ba', fontWeight: '500', fontSize: 14, paddingRight: 10 }}>All terminals, Exit after beggage claim, 13405 Berlin Reinenchedorf</Text>
                    </View>
                </View>

                <View style={styles.listItem}>
                    <View>
                        <Icon
                            name="ios-car"
                            color="#dbdce0"
                            size={25}
                            style={styles.icon}
                        />
                    </View>
                    <View>
                        <Text style={{ color: '#a6a7ac', fontSize: 16, marginBottom: 5 }}>Alegbsh 7</Text>
                        <Text style={{ color: '#b5b5ba', fontWeight: '500', fontSize: 14 }}>Alegbsh 7, 14139 Berlin</Text>
                    </View>
                </View>

                <View style={styles.listItemWithBtn}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon
                            name="ios-airplane"
                            color="#dbdce0"
                            size={30}
                            style={styles.icon}
                        />
                        <Text style={{ color: '#b5b5ba', fontWeight: '700', width: 200, fontSize: 14 }}>LH 544</Text>
                        <Text style={{width:100, height: 25, textAlign: 'center', marginBottom: 5, color: '#fff'}}>22:30</Text>
                    </View>
                    <View>
                        <Text style={{color: '#55ae75', paddingLeft: 30, fontWeight: '700'}}>On Time</Text>
                    </View>
                </View>

                <View style={styles.listItemWithoutBorder}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: '#fff', paddingLeft: 30,fontSize: 16, marginBottom: 5, marginTop: 5, width:185, textAlign: 'left', fontWeight: '600'}}>Guest</Text>
                    </View>
                    <View>
                        <Text style={{color: '#b0b0b1', paddingLeft: 30, fontSize: 15, fontWeight: '500'}}>Ms. Go Eu Choi </Text>
                    </View>
                </View>
                <View style={styles.listItemWithoutBorder}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: '#fff', paddingLeft: 30,fontSize: 16, marginBottom: 5, marginTop: 5, width:185, textAlign: 'left', fontWeight: '600'}}>Pickup sign</Text>
                    </View>
                    <View>
                        <Text style={{color: '#b0b0b1', paddingLeft: 30, fontSize: 14, fontWeight: '500'}}>Alice</Text>
                    </View>
                </View>
                <View style={styles.listItemWithoutBorder}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: '#fff', paddingLeft: 30,fontSize: 16, marginBottom: 5, marginTop: 5, width:300, textAlign: 'left', fontWeight: '600'}}>Additional Comments</Text>
                    </View>
                    <View>
                        <Text style={{color: '#b0b0b1', paddingLeft: 30, fontSize: 14, fontWeight: '500'}}>Termianl C</Text>
                    </View>
                </View>
                <View style={styles.listItemWithoutBorder}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: '#fff', paddingLeft: 30,fontSize: 16, marginBottom: 5, marginTop: 5, width:185, textAlign: 'left', fontWeight: '600'}}>Booking Number</Text>
                    </View>
                    <View>
                        <Text style={{color: '#b0b0b1', paddingLeft: 30, fontSize: 14, fontWeight: '500'}}>#654634564</Text>
                    </View>
                </View>

            </View>

        </View>
    </View>
);

const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#1e2126', margin: 15, borderRadius: 10 }]}>
        <GradientButton
            style={{ marginVertical: 8,alignSelf: 'stretch',
                textAlign: 'center' }}
            text="60 min prior pickup"
            textSyle={{ fontSize: 16 }}
            gradientBegin="#874f00"
            gradientEnd="#f5ba57"
            gradientDirection="diagonal"
            height={40}
            radius={5}
            impact
            impactStyle='Light'
            onPressAction={() => alert('You pressed me!')}
        />

        <GradientButton
            style={{ marginVertical: 8,alignSelf: 'stretch',
                textAlign: 'center' }}
            text="Arrived at pickup location"
            textSyle={{ fontSize: 16 }}
            gradientBegin="#874f00"
            gradientEnd="#f5ba57"
            gradientDirection="diagonal"
            height={40}
            radius={5}
            impact
            impactStyle='Light'
            onPressAction={() => alert('You pressed me!')}
        />

        <GradientButton
            style={{ marginVertical: 8,alignSelf: 'stretch',
                textAlign: 'center' }}
            text="Pasager on board"
            textSyle={{ fontSize: 16 }}
            gradientBegin="#874f00"
            gradientEnd="#f5ba57"
            gradientDirection="diagonal"
            height={40}
            radius={5}
            impact
            impactStyle='Light'
            onPressAction={() => alert('You pressed me!')}
        />

        <GradientButton
            style={{ marginVertical: 8,alignSelf: 'stretch',
                textAlign: 'center', fontSize: 16 }}
            text="Finish ride"
            textSyle={{ fontSize: 14 }}
            gradientBegin="#874f00"
            gradientEnd="#f5ba57"
            gradientDirection="diagonal"
            height={40}
            radius={5}
            impact
            impactStyle='Light'
            onPressAction={() => alert('You pressed me!')}
        />
    </View>
);

const ThirdRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#1e2126', margin: 15, borderRadius: 10  }]}>
        <Text>Screen 3</Text>
    </View>
);

class TriptDetails extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Info' },
            { key: 'second', title: 'Ride' },
            { key: 'third', title: 'Extras' },
        ],
    };

    static navigationOptions = {
        title: 'Trip',
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.topHeader}>
                        <View style={styles.column}>
                            <Text style={{color: '#fff', fontWeight: '600', width: 200, fontSize: 20}}>Planned Ride Details</Text>
                        </View>
                    </View>
                    <TabView
                        style={{paddingTop:15}}
                        navigationState={this.state}
                        renderScene={SceneMap({
                            first: FirstRoute,
                            second: SecondRoute,
                            third: ThirdRoute,
                        })}
                        renderTabBar={props => (
                            <TabBar
                                {...props}
                                renderLabel={this._renderLabel}
                                getLabelText={({ route: { title } }) => title}
                                indicatorStyle={styles.indicator}
                                tabStyle={styles.tabStyle}
                                style={styles.tab}
                            />
                        )}
                        onIndexChange={index => this.setState({ index })}
                        initialLayout={{ width: Dimensions.get('window').width }}
                    />
                </ScrollView>
            </View>
        );
    }
}

export default TriptDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3037',
    },
    listItem: {
        flexDirection: 'row',
        marginBottom: 15,
        borderBottomColor: '#25262b',
        borderBottomWidth: 2,
        paddingBottom: 15,
    },
    listItemWithBtn: {
        marginBottom: 15,
        borderBottomColor: '#25262b',
        borderBottomWidth: 2,
        paddingBottom: 15,
    },
    listItemWithoutBorder: {
        marginBottom: 25,
    },
    tab: {
        backgroundColor: '#1e2126',
    },
    icon: {
        fontSize: 25,
        marginRight: 10,
        color: '#dbdce0',
    },
    item: {
        borderRadius: 10,
        flex: 1,
        marginBottom: 15,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
    },
    itemHeader: {
        borderBottomColor: '#464646',
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
        marginLeft: 25,
        marginRight: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    scene: {
        flex: 1,
    },
});