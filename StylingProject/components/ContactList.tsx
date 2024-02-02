import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>

      <ScrollView scrollEnabled={false} style={styles.container}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.card}>
            <Image source={{uri: `${imageUrl}`}} style={styles.imageCard} />
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.statusText}>{status}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imageCard: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  card: {
    margin: 4,
  },
  nameText: {},
  statusText: {},
  container: {},
  headingText: {
    fontSize: 24,
  },
});
