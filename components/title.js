import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz App</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: '600',
        color: 'black',
        fontStyle:'italic',
    },
    container:{
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


