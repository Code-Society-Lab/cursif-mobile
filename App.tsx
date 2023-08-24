import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './src/styles/styles';

export default function App() {
  const [isBlackBackground, setIsBlackBackground] = useState(true);

  const toggleBackground = () => {
    setIsBlackBackground(!isBlackBackground);
  };

  const containerStyle = [
    styles.container,
    isBlackBackground ? { backgroundColor: 'black' } : { backgroundColor: 'white' },
  ];

  const textStyle = [
    styles.text,
    isBlackBackground ? { color: 'white' } : { color: 'black' },
  ];

  const cornerTextStyle = [
    styles.cornerText,
    isBlackBackground ? styles.whiteCornerText : styles.blackCornerText,
  ];

  return (
    <View style={containerStyle}>
      <Image source={require('./assets/code_society.svg')}></Image>

      <TouchableOpacity onPress={toggleBackground}>
        <Text style={textStyle}>Welcome to Cursif!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleBackground} style={cornerTextStyle}>
        <Text style={isBlackBackground ? { color: 'white' } : {}}>{isBlackBackground ? 'White' : 'Black'}</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
