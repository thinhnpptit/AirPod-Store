/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, FlatList} from 'react-native';

import CategoryItemList from './components/CategoryItemList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {id: 1, name: 'Airpod1'},
        {id: 2, name: 'Airpod2'},
        {id: 3, name: 'Airpod3'},
      ]
    };
  }

  render() {
    const {categories} = this.state;
    return (
      // <ScrollView style={{paddingLeft: 16, paddingRight: 16}}>
      //   {categories.map((category) => (
      //     <CategoryItemList key= {category.id}/>
      //   ))}
      // </ScrollView>
      <FlatList
      data={categories} 
      renderItem={({item}) => <CategoryItemList category={item}/>} 
      keyExtractor={item => '${item.id}'}
      contentContainerStyle={{paddingLeft: 16, paddingRight: 16}}
      >
      </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#ffff',
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default App;
