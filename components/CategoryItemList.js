import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Airpod from '../assets/air1.jpg';

export default function CategoryItemList(props) {
  const {category} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.name}</Text>
      <Image source={Airpod} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
    marginBottom: 8
  },

  img: {
    height: 100,
    width: 100,
  },

  title: {
    textTransform: 'uppercase',
    marginBottom: 8,
    fontWeight: 'bold',
  },
});
