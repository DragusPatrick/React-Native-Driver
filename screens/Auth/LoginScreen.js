import React from 'react';
import { Platform, TouchableOpacity, StyleSheet, View, TextInput, Text, KeyboardAvoidingView, AsyncStorage } from 'react-native';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false,
            token: '',
        };
    }

    login = () =>{
        const {email} = this.state;
        const {password} = this.state;

        fetch('https://api.blackhansa.de/auth/login',{
            method:'post',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                // we will pass our input data to server
                email: email,
                password: password
            })

        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson = 'ok'){
                    // redirect to profile page
                    alert("Successfully Login");
                    AsyncStorage.setItem('userToken', JSON.stringify(responseJson))
                    this.props.navigation.navigate("Settings");
                } else {
                    alert("Wrong Login Details");
                }
            })
            .catch((error)=>{
                console.error(error);
            });
    }

    render() {
        return (
            <View style={{flex:1, backgroundColor: 'black'}}>
                <KeyboardAvoidingView behavior='padding' style={{flex:1, marginTop: 72, marginLeft: 25, marginBottom: 0}}>
                    <TextInput
                        placeholder="Enter Email"
                        style={{width:200, margin:10, color: '#fff', backgroundColor: 'gray'}}
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
                    />

                    <TextInput
                        placeholder="Enter Password"
                        style={{width:200, margin:10, color: '#fff', backgroundColor: 'gray'}}
                        onChangeText={password => this.setState({password})}
                        value={this.state.password}
                    />

                    <TouchableOpacity
                        onPress={this.login}
                        style={{width: 200, padding: 10, backgroundColor: 'magenta'}}
                    >
                        <Text>Login</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
