import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [color, setcolor] = useState('#000000');

  const backgroundColorChange = () => {
    let colorfull = '#';
    let hexrange = '0123456789ABCDEF';

    for (let i = 0; i < 6; i++) {
      const elementindex = Math.round(Math.random() * 16);
      colorfull += hexrange.charAt(elementindex);
    }

    setcolor(colorfull);
  };

  return (
    <View backgroundColor={color} style={styles.container}>
      <StatusBar backgroundColor={color} />
      <Button title="Pressme" onPress={backgroundColorChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
