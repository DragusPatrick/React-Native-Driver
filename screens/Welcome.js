import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            error: '',
            loading: false,
            user: []
        };
    }

    render() {

        return (
            <View style={styles.container}>

                <View style={styles.headerLogo}>
                    <Image style={styles.logo}
                           source={require('../assets/images/logo.png')} />
                </View>

                <View style={styles.icons}>
                    <View style={{flexDirection: 'column',justifyContent:"center", alignItems:"center"}}>
                        <Icon
                            name="ios-contact"
                            color="#dbdce0"
                            size={20}
                            style={styles.iconSmall}
                        />

                        <Text style={{color: '#fff', fontWeight: '600'}}>User</Text>
                    </View>

                    <View style={{flexDirection: 'column', justifyContent:"center", alignItems:"center"}}>
                        <Icon
                            name="ios-help-circle"
                            color="#dbdce0"
                            size={20}
                            style={styles.iconSmall}
                        />

                        <Text style={{color: '#fff',justifyContent:"center", alignItems:"center", fontWeight: '600'}}>Help</Text>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Dragus {this.state.user.name}</Text>
                        <Text style={{textAlign: 'center', color: '#fffdff', fontWeight: '600', fontSize: 18}}>
                            <Icon
                                name="ios-star"
                                color="#dbdce0"
                                size={20}
                                style={styles.icon}
                            /> 4.8
                        </Text>
                    </View>

                    <View style={styles.boxContent}>
                        <Text style={{color: '#fff',}}>20:30 TXX</Text>
                        <Text style={{color: '#fff', paddingTop: 10}}>Helensee lorem ipsum bla bla</Text>
                    </View>
                </View>

            </View>
        );
    }
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 15,
    },
    headerLogo: {
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: '#121318',
        justifyContent: "center",
        position: 'absolute',
        bottom: 5,
        marginBottom: 100,
        marginLeft:15,
        width: '100%',
        flex: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    boxContent: {
        padding: 15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'column',
    },
    headerText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 18,
    },
    icons: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent:"center",
        alignItems:"center",
    },
    header: {
        backgroundColor: '#f2a948',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        overflow: "hidden",
        color: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
    },
    logo: {
        alignItems: "stretch",
        height: 40,
        justifyContent: 'center',
        width: '70%',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, .7)',
                shadowOffset: { height:4, width: 4 },
                shadowOpacity: 1,
                shadowRadius: 5,
            },
            android: {
                elevation: 5
            },
        }),
    },
    icon: {
        fontSize: 18,
        marginRight: 10,
        padding: 5,
        color: '#fffdff',
    },
    iconSmall: {
        fontSize: 26,
        marginRight: 10,
        padding: 5,
        color: '#fffdff',
        justifyContent: 'center',
        marginLeft: 7,
    },
    firstRow: {
        flex: 1,
        marginLeft: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
        backgroundColor: 'white',
    },
    topHeader: {
        flex: 1,
        marginLeft: 25,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    middleRow: {
        flex:1,
    },
    bottomRow: {
        borderRadius: 20,
        marginLeft: 15,
        backgroundColor: '#131626',
        marginRight: 0,
        width: 380,
    }
});
