import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';

class SettingsScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Settings screen</Text>
        </View>
    );
  }
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
