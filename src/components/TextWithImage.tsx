import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  text: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffff',
  },
  image: {
    marginLeft: 10,
    marginRight: 0,
    width: '65%',
  },
});
