import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Offers extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={{color: '#e15d34'}}>No Offers</Text>
            </View>
        );
    }
}

export default Offers;

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
