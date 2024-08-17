import * as React from 'react';
import {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import SearchInput from '@components/SearchInput';
import TextWithImage from '@components/TextWithImage';
import ListItem from '@components/ListItem';
import logo from '@assets/images/logo.png';
import backArrow from '@assets/images/back-arrow.png';
import line from '@assets/images/Line.png';
import {styles} from './styles';
import {Character} from '@types/Character';

export default function DetailsScreen() {
  const navigation = useNavigation();
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')}>
        <Image source={backArrow} style={styles.backButtonImage} />
      </TouchableOpacity>
      <Image source={logo} style={styles.logo} />
      <SearchInput placeholder="Find a character" />
      <TextWithImage text="Characters" imageSource={line} />
      <FlatList
        data={characters}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ListItem
            imageSource={{uri: item.image}}
            name={item.name}
            type={item.species}
            description={item.location.name}
          />
        )}
      />
    </View>
  );
}
