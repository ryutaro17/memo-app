import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class BodyText extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <View>
        <Text style={styles.text}>
          {children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
});

export default BodyText;
