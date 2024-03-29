/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import DiceOne from '../assets/assets/One.png';
import DiceTwo from '../assets/assets/Two.png';
import DiceThree from '../assets/assets/Three.png';
import DiceFour from '../assets/assets/Four.png';
import DiceFive from '../assets/assets/Five.png';
import DiceSix from '../assets/assets/Six.png';
import RNReactNativeHapticFeedback from 'react-native-haptic-feedback';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>; //Decalring the type of variable Diceprops {speciality of typescript} Data type declaration

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: DiceProps) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

export default function App(): JSX.Element {
  const [DiceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const rollDiceOnTap = () => {
    const random = Math.round(Math.random() * 6) + 1;

    switch (random) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;

      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }

    RNReactNativeHapticFeedback.trigger('impactLight', options);
  };
  return (
    <View style={styles.container}>
      <Dice imageUrl={DiceImage} />
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll the dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
