import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
} from 'react-native';

//safearea view-To avoid the notches
//view-Like div in frontend
//text is like Text element
//align items work left to right
//justify content works top to bottom remember this two
//use colorscheme is a appreance hook that is predefault set by the user preference so we have to check for the preference

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  whiteText: {
    color: '#FF0000',
  },
  blackText: {
    color: '#000000',
  },
});
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.blackText : styles.whiteText}>
        not whatever
      </Text>
    </View>
  );
}

export default App;
