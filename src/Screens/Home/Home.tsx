import * as React from 'react';
import {ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '@components/CustomButton';
import {styles} from './HomeStyles';
import backgroundImage from '@assets/images/backgroundHome.png';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="stretch">
      <CustomButton
        text="FIND CHARACTERS"
        onPress={() => navigation.navigate('Details')}
      />
    </ImageBackground>
  );
}
