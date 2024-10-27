import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import logo from '@assets/images/logo.png';
import CustomButton from '@components/CustomButton';

export default function NotFoundScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.containerCenter}>
        <Text style={styles.message}>404</Text>
        <Text style={styles.messageNotFound}>Page not found!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          text="Back home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}
