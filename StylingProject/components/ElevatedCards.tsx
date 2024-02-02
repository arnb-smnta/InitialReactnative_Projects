import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardOne, styles.elevated]}>
          <Text>Card</Text>
        </View>
        <View style={[styles.card, styles.cardOne, styles.elevated]}>
          <Text>Card</Text>
        </View>
        <View style={[styles.card, styles.cardOne, styles.elevated]}>
          <Text>Card</Text>
        </View>
        <View style={[styles.card, styles.cardOne, styles.elevated]}>
          <Text>Card</Text>
        </View>
        <View style={[styles.card, styles.cardOne, styles.elevated]}>
          <Text>Card</Text>
        </View>
        <View style={[styles.card, styles.cardOne, styles.elevated]}>
          <Text>Card</Text>
        </View>
        <View style={[styles.card, styles.cardOne, styles.elevated]}>
          <Text>Card</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  elevated: {
    elevation: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#0000FF',
  },
  container: {},
  cardOne: {backgroundColor: '#EF5354'},
  cardTwo: {backgroundColor: '#0000FF'},
  cardThree: {backgroundColor: '#008000'},
});
