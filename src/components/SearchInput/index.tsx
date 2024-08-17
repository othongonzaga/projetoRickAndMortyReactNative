import * as React from 'react';
import {View, TextInput, Image} from 'react-native';
import searchIcon from '@assets/images/search.png';
import {styles} from './styles';

interface SearchInputProps {
  placeholder: string;
}

export default function SearchInput({placeholder}: SearchInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#FFFFFF"
      />
      <Image source={searchIcon} style={styles.icon} />
    </View>
  );
}
