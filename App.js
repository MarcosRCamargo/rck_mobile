import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App () {
  return (
          <View style={styles.sectionContainer}>
              <Text style={styles.text}>TinDev</Text>
              <View style={styles.flexrow}>
                <View style={styles.fcol1}></View>
                <View style={styles.fcol2}></View>
                <View style={styles.fcol3}></View>
              </View>
          </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 20
  },
  flexrow:{
    flex:1,
    flexDirection: 'row',
  },
  fcol1:{
    width: 50,
    height:50,
    backgroundColor:'powderblue'
  },
  fcol2:{
    width: 50,
    height:50,
    backgroundColor:'red'
  },
  fcol1:{
    width: 50,
    height:50,
    backgroundColor:'green'
  }
});

