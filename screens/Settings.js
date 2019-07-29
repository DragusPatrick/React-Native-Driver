import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity, AsyncStorage} from 'react-native';

class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        }
    }

    componentWillMount(){
        AsyncStorage.getItem('userToken').then((responseJson) => {
            let user = JSON.parse(responseJson);
            this.setState({
                user: responseJson,
                loaded: true
            });
        });

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    {
                        this.state.user &&
                        <View style={styles.body}>
                            <View style={{padding: 50}}>
                                <Text style={{color: '#fff'}}>{this.state.user.password}</Text>
                            </View>
                        </View>
                    }
                </View>
            </View>
        );
    }
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212429',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 200
    },
    contentContainer: {
        flex : 0,
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingVertical: 20,
        overflow:'visible',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
});
