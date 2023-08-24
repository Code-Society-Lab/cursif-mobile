import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


export default () => (
  <View style={styles.container}>
    <Text><h1>Welcome to Cursif!</h1></Text>
    <StatusBar style="auto" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});