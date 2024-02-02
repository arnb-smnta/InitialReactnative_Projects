import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCards</Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Victoria-Memorial_1400.jpg',
          }}
          style={styles.cardImage}
        />
        <View>
          <Text style={styles.cardTitle}>Victoriam Memorial</Text>

          <Text style={styles.cardTitle}>
            Made by quen victoria and britishers
          </Text>

          <Text style={styles.cardDesc}>Kolkata,WestBengal,India -700017</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {fontSize: 24, fontWeight: 'bold', paddingHorizontal: 12},
  card: {
    width: 350,
    height: 360,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardTitle: {color: '#FFFFFF'},
  cardDesc: {color: '#FFFFFF'},
  cardElevated: {backgroundColor: '#000000', elevation: 8},
  cardImage: {
    height: 180,
  },
});
