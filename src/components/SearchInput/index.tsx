import * as React from 'react';
import {useState} from 'react';
import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import searchIcon from '@assets/images/search.png';
import {styles} from './styles';

interface SearchInputProps {
  placeholder: string;
  onSearch: (searchTerm: string) => void;
}

export default function SearchInput({placeholder, onSearch}: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#FFFFFF"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <TouchableOpacity onPress={() => onSearch(searchTerm)}>
        <Image source={searchIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
