// Task.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = ({ text, completed }) => {
  return (
    <View style={completed ? styles.itemCompleted : styles.item}>
      <View style={styles.itemLeft}>
        <View style={completed ? styles.squareCompleted : styles.square}></View>
        <Text style={completed ? styles.itemTextCompleted : styles.itemText}>{text}</Text>
      </View>
      <View style={completed ? styles.circularCompleted : styles.circular}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemCompleted: {
    backgroundColor: '#E1E1E1',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#AC87C5',
    borderRadius: 5,
    marginRight: 15,
  },
  squareCompleted: {
    width: 24,
    height: 24,
    backgroundColor: '#AC87C5',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  itemTextCompleted: {
    maxWidth: '80%',
    textDecorationLine: 'line-through',
    color: '#AC87C5',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#AC87C5',
    borderWidth: 2,
    borderRadius: 5,
  },
  circularCompleted: {
    width: 12,
    height: 12,
    borderColor: '#AC87C5',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#AC87C5',
    opacity: 0.4,
  },
});

export default Task;
