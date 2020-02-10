import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memotTitle}>講座のアイテム</Text>
          <Text style={styles.memotDate}>2017/10/10</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memotTitle}>講座のアイテム</Text>
          <Text style={styles.memotDate}>2017/10/10</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memotTitle}>講座のアイテム</Text>
          <Text style={styles.memotDate}>2017/10/10</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memotTitle}>講座のアイテム</Text>
          <Text style={styles.memotDate}>2017/10/10</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  memotTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memotDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});

export default MemoList;
