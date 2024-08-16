import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

interface ListItemProps {
  imageSource: {uri: string};
  name: string;
  type: string;
  description: string;
}

export default function ListItem({
  imageSource,
  name,
  type,
  description,
}: ListItemProps) {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.type}>{type}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
