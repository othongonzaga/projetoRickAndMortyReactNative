import * as React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import searchIcon from '../assets/images/search.png';

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Alinhando o TextInput e o ícone horizontalmente
    alignItems: 'center',
    backgroundColor: '#407772',
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1, // Ocupar o espaço restante
    fontSize: 22,
    color: '#FFFFFF',
    padding: 15,
  },
  icon: {
    tintColor: '#EBFF6E',
    marginLeft: 0,
  },
});
