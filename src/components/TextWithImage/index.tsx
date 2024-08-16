import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

interface TextWithImageProps {
  text: string;
  imageSource: any;
}

export default function TextWithImage({text, imageSource}: TextWithImageProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
}
