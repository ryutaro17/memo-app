import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class AppBar extends React.Component {
  render() {
    return (
      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>MEMOT</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appbar: {
    position: 'absolute',
    top: 0,
    height: 78,
    paddingTop: 30,
    left: 0,
    right: 0,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 15,
  },
});

export default AppBar;
