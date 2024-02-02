import {Button, Image, Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style>ActionCard</Text>

      <View style={styles.container}>
        <View style={[styles.card, styles.elevated]}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
            }}
            style={styles.imageCard}
          />
          <Button
            title="Follow me"
            onPress={() =>
              openWebsite('https://www.facebook.com/ghontusamanta')
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  card: {
    marginVertical: 8,
    marginHorizontal: 10,
  },
  elevated: {},
  imageCard: {height: 400},
});
