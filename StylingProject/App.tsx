import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <View>
      <ScrollView>
        <Text>App</Text>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ContactList />
        <ActionCard />
      </ScrollView>
    </View>
  );
};

export default App;
