import React from 'react';
import {
    Platform,
    ActivityIndicator,
    StatusBar,
    AsyncStorage,
    StyleSheet,
    View,
    Text
} from 'react-native';

import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Welcome from './screens/Welcome';
import Offers from './screens/Offers';
import Planned from './screens/Planned';
import Finished from './screens/Finished';
import Settings from './screens/Settings';
import LoginScreen from './screens/Auth/LoginScreen';

class App extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

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

    newJWT(jwt){
        this.setState({
            jwt: jwt
        });
    }

    onButtonPress = () => {
        //function to change the state to true to view activity indicator
        this.setState({
            showIndicator: true
        });
        //changing state will re-render the view and indicator will appear
    };

    render() {
        //Check if showIndicator state is true the show indicator if not show button
        if (this.state.showIndicator){
            return (
                <View style={styles.container}>
                    {/*Code to show Activity Indicator*/}
                    <ActivityIndicator size="large" color="#0000ff" />
                    {/*Size can be large/ small*/}
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    {/*On CLick of a button onButtonPress will bw called will change the state*/}
                    <Button onPress={this.onButtonPress} title='Click to see Indicator' />
                </View>
            );
        }
    }
}

export default createBottomTabNavigator({
    Welcome: {
        screen: Welcome,
        navigationOptions: {
            tabBarLabel:'Overview',
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="ios-home"
                    color={tintColor}
                    style={styles.icon}
                />
            )
        }
    },
    Offers: {
        screen: Offers,
        navigationOptions: {
            tabBarLabel:'Offers',
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="ios-browsers"
                    color={tintColor}
                    style={styles.icon}
                />
            )
        }
    },
    Planned: {
        screen: Planned,
        navigationOptions: {
            tabBarLabel:'Planned',
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="ios-paper"
                    color={tintColor}
                    style={styles.icon}
                />
            )
        }
    },
    Finished: {
        screen: Finished,
        navigationOptions: {
            tabBarLabel:'Finished',
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="ios-checkmark-circle"
                    color={tintColor}
                    style={styles.icon}
                />
            )
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel:'Settings',
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="ios-contact"
                    color={tintColor}
                    style={styles.icon}
                />
            )
        }
    },
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            tabBarLabel:'Sign In',
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="ios-contact"
                    color={tintColor}
                    style={styles.icon}
                />
            )
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: '#fbb040',
        inactiveTintColor: 'white',
        style: {
            backgroundColor: '#141625',
            shadowOffset: {width:5, height: 3},
            shadowColor: '#d6d6d6',
            shadowOpacity: 0.5,
            height:60,
        }
    }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    icon: {
        fontSize: 25,
        color: '#ecf0f5',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
